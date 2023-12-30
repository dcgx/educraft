<template>
  <form @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="username">
      <FormItem>
        <label>Title</label>
        <FormControl>
          <Input type="text" placeholder="shadcn" v-bind="componentField" />
        </FormControl>
        <FormDescription> This is your public display name. </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>

    <div
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
    ></div>

    <Button type="button"> Create course </Button>
  </form>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
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
import { motion, AnimatePresence } from "framer-motion";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const units = ref<string[]>([]);

const formSchema = toTypedSchema(
  z.object({
    username: z.string().min(2).max(50),
  })
);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values) => {
  console.log("Form submitted!", values);
});
</script>
