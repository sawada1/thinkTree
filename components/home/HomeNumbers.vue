<template>
 <div class="numbers container grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 mt-[70px] xl:mt-[120px] lg:mt-[120px] rounded-[16px] bg-lightGreen px-[30px] py-[20px] ">
            <div class="flex flex-col items-center gap-3">
                <h3 class="text-[53px] text-primary font-bold"> {{ num1 }}<span class="text-orange">+</span> </h3>
                <p class="text-[24px] font-bold text-[#8E8E8E]"> أب و أم سعداء بتجربتهم معنا </p>
            </div>
            <div class="flex flex-col items-center gap-3">
                <h3 class="text-[53px] text-primary font-bold"> {{ num2 }}<span class="text-orange">+</span> </h3>
                <p class="text-[24px] font-bold text-[#8E8E8E]"> ساعة تدريبية تم تقديمها </p>
            </div>
            <div class="flex flex-col items-center gap-3">
                <h3 class="text-[53px] text-primary font-bold"> {{ num3 }}<span class="text-orange">+</span> </h3>
                <p class="text-[24px] font-bold text-[#8E8E8E]"> بطل </p>
            </div>
            <div class="flex flex-col items-center gap-3">
                <h3 class="text-[53px] text-primary font-bold"> {{ num4 }}<span class="text-orange">/</span>5  </h3>
                <p class="text-[24px] font-bold text-[#8E8E8E]"> معدل تقييم الابطال لنا </p>
            </div>
        </div>
</template>

<script setup>
const num1 = ref(0);
const num2 = ref(0);
const num3 = ref(0);
const num4 = ref(0);
const targetNumbers = [2200, 30000, 1100, 4.5]; 
let animated = false; 

const animateNumbers = () => {
  if (animated) return; 
  animated = true;
  const durations = [1500, 1500, 1500, 1500]; 
  targetNumbers.forEach((target, index) => {
    const start = 0;
    const duration = durations[index];
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentNumber = Math.floor(progress * target);

      // Update the specific ref
      if (index === 0) num1.value = currentNumber;
      if (index === 1) num2.value = currentNumber;
      if (index === 2) num3.value = currentNumber;
      if (index === 3) num4.value = currentNumber;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        // Ensure the final value matches the target
        if (index === 0) num1.value = target;
        if (index === 1) num2.value = target;
        if (index === 2) num3.value = target;
        if (index === 3) num4.value = target;
      }
    };

    requestAnimationFrame(updateCounter);
  });
};

onMounted(() => {
    const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateNumbers();
        }
      });
    },
    { threshold: 0.3 } // Trigger when 30% of the section is visible
  );

  const section = document.querySelector(".numbers");
  observer.observe(section); 
});
</script>