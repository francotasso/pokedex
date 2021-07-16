<template>
    <div class="pokeball-container">
        <div class="pokeball-wrapper">
            <div class="pokeball"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style>
.pokeball-container {
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--light-gray);
  height: 100vh;
  width: 100%;
  z-index: 999;
}
.pokeball-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.pokeball {
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 50% ;
  position: relative;
  overflow: hidden;
  border: 3px solid;
  transform-origin: bottom center;
  animation: wiggle 1.2s ease-in-out infinite;
}
.pokeball:after{
  content: '';
  position: absolute;
  width: 100px;
  height: 50px;
  background-color: red;
  border-bottom: 4px solid;
  top: -2px
}

.pokeball:before{
  content: '';
  position: absolute;
  background-color: #fff;
  width: 30px;
  height: 30px;
  border: 4px solid;
  border-radius: 50%;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
  z-index: 1;
}

/* AnimationFrames */
@keyframes frames{
  0% {
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}

@keyframes wiggle {
  20% {
    transform: translateX(4px) rotate(-7deg);
  }
  
  40% {
    transform: translateX(-8px)  rotate(14deg);
  }
  
  60% {
    transform: translateX(2px)  rotate(-4deg);
  }
  
  80% {
    transform: translateX(-1px)  rotate(2deg);
  }
  
  100% {
    transform: translateX(0px) rotate(0deg);
  }
}
</style>