<template>
  <div>
    <header>
      <nav class="flex justify-between max-w-screen-lg mx-auto">
        <div class="flex">
          <a
            class="
              flex
              items-center
              text-sm text-blue-900
              font-bold
              uppercase
              cursor-pointer
            "
          >
            <img
              class="mr-2"
              src="https://edulingo.vercel.app/assets/svg/learn.svg"
              alt=""
            />
            Aprender
          </a>
          <a
            class="
              ml-5
              flex
              items-center
              text-sm text-gray-500
              font-bold
              uppercase
              cursor-pointer
            "
          >
            <img
              class="mr-1"
              src="https://d35aaqx5ub95lt.cloudfront.net/vendor/d3f3ad5d80a9a934e00054f56ec5fbe9.svg"
              alt=""
            />
            mas
          </a>
        </div>
        <div class="flex items-center">
          <a class="text-md font-bold text-red-600 mr-5">
            <img
              class="mr-2 inline-block"
              src="https://d35aaqx5ub95lt.cloudfront.net/vendor/aed279fcbad509208b45ca7a17f3e8dc.svg"
              alt=""
            />
            74</a
          >
          <div class="border-gray-200 rounded-full border-4">
            <img class="w-8 rounded-full" alt="" />
          </div>
        </div>
      </nav>
    </header>
    <main class="pt-14 max-w-screen-xl mx-auto">
      <div class="border border-white">
        <h2>Elegir dificultad</h2>
      </div>
      <div class="flex">
        <div class="border-red-700 flex flex-1 justify-center">
          <div class="grid grid-rows-5">
            <div class="flex items-center justify-center pb-10">
              <e-session></e-session>
            </div>
            <div class="flex items-center justify-center py-7">
              <e-session class="mr-5"></e-session>
              <e-session></e-session>
            </div>
            <div class="flex items-center justify-center py-7">
              <e-session class="mr-5"></e-session>
              <e-session></e-session>
            </div>
          </div>
        </div>
        <div>
          <div
            class="
              flex flex-col
              items-center
              justify-center
              rounded-xl
              border
              p-8
              mb-5
            "
            style="background: rgba(255, 255, 255, 0.7)"
          >
            <img
              width="300"
              src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/placeholder.svg"
              alt=""
            />
            <h4 class="text-black font-semibold my-4">
              Participa de las ligas
            </h4>
            <p>Completa 10 lecciones más para empezar a competir</p>
          </div>

          <div
            class="rounded-xl border p-8 relative"
            style="background: rgba(255, 255, 255, 0.7)"
          >
            <div class="flex items-center justify-between">
              <h4 class="text-black font-bold">Progreso de EXP</h4>
              <span class="uppercase text-blue-500 font-bold text-sm">
                Cambiar meta
              </span>
            </div>
            <div class="flex mt-5">
              <div>
                <img
                  src="https://d35aaqx5ub95lt.cloudfront.net/images/chest-closed.svg"
                  alt=""
                />
              </div>
              <div class="w-full text-center">
                <h5 class="mr-16">Meta diaria</h5>
                <div class="flex">
                  <div
                    class="bg-gray-200 py-2 flex-1 ml-4 rounded-full w-full"
                  ></div>
                  <div class="ml-4">0/20 EXP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
