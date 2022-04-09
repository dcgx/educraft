<template>
  <div style="max-width: 1024px; margin: 0 auto">
    {{ $route.params.topicId }}

    <h1>Pregunta 1/10</h1>
    <strong class="text-white pb-5">Películas</strong>

    <div class="mt-5" style="border-bottom: 2px solid #fff"></div>

    <p class="text-white font-bold mt-6">
      If you were to code software in this language you'd only be able to type
      0's and 1's.
    </p>

    <ul class="choice-list">
      <li class="choice wrong">Binary</li>
      <li class="choice">JavaScript</li>
      <li class="choice correct">C++</li>
      <li class="choice">Python</li>
    </ul>

    <div>
      <button class="btn">Quit Quiz</button>
      <button class="btn">Next</button>
    </div>
  </div>
</template>

<style scoped>
.choice-list {
  margin-top: 50px;
}
.choice-list .choice {
  border: 1px solid #fff;
  padding: 10px 0;
  width: 50%;
  color: #fff;
  font-weight: 600;
  border-radius: 10px;
  margin: 13px auto;
  cursor: pointer;
}
.choice-list .choice.wrong {
  border: 2px solid #f56565;
  color: #f56565;
}
.choice-list .choice.correct {
  border: 2px solid #12c69d;
  color: #12c69d;
}
.choice-list .choice:hover {
  background: rgba(144, 205, 244, 0.1);
}
</style>
