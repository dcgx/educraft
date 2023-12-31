<template>
  <form
    @submit="onSubmit"
    class="w-full border border-slate-800 px-5 py-6 rounded-lg"
  >
    <FormField v-slot="{ componentField }" name="username">
      <FormItem>
        <label>Title</label>
        <FormControl>
          <Input
            type="text"
            placeholder="AWS Cloud Practioner Roadmap"
            v-bind="componentField"
          />
        </FormControl>
        <FormDescription> This is your public display name. </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>

    <div
      class="mt-5"
      v-for="(unit, index) in units"
      :key="index"
      v-motion="{
        initial: {
          y: 100,
          opacity: 0,
        },
        enter: {
          y: 0,
          opacity: 1,
        },
      }"
    >
      <FormField v-slot="{ componentField }" name="title">
        <FormItem class="grid items-center justify-start gap-5 grid-cols-10">
          <div class="col-span-1">
            <label>Unit {{ index + 1 }}</label>
          </div>
          <div class="col-span-8">
            <Input
              type="text"
              :name="componentField.name"
              placeholder="AWS Cloud Practioner Roadmap"
              v-model="unit.title"
              v-bind="componentField"
            />
          </div>
          <div class="col-span-1">
            <button
              type="button"
              @click="removeUnitByUniqueId(unit.uuid)"
              class="hover:text-red-500 cursor-pointer transition duration-100"
            >
              <TrashIcon class="w-5 h-5 cursor-pointer" />
            </button>
          </div>
          <FormMessage />
        </FormItem>
      </FormField>
    </div>

    <div class="flex items-center gap-5 justify-end mt-5">
      <Button @click="removeUnit" type="button" variant="secondary">
        <MinusIcon class="text-red-500 mr-2" />
        Remove unit
      </Button>
      <Button @click="addUnit" type="button" variant="secondary">
        <PlusIcon class="text-green-500 mr-2" />
        Add Unit
      </Button>
    </div>

    <div class="flex mt-10">
      <Button class="w-full"> Create course! </Button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";
import { useForm } from "vee-validate";
import { TrashIcon, MinusIcon, PlusIcon } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

type Unit = {
  uuid: string;
  title: string;
};

const units = ref<Unit[]>([]);

const formSchema = toTypedSchema(
  z.object({
    username: z.string().min(2).max(50),
  })
);

const form = useForm({
  validationSchema: formSchema,
});

const addUnit = () => {
  units.value.push({
    uuid: uuidv4(),
    title: `Unit ${units.value.length + 1}`,
  });
};

const removeUnit = () => {
  units.value.pop();
};

const removeUnitByUniqueId = (uuid: string) => {
  units.value = units.value.filter((unit) => unit.uuid !== uuid);
};

const onSubmit = form.handleSubmit((values) => {
  console.log("Form submitted!", values);
});
</script>
