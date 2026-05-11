<template>
    <iframe class="youtube-video w-full" title="title" :width="width" :height="height" src="https://www.youtube.com/embed/_4ukb5bMKsw?enablejsapi=1&version=3&playerapiid=ytplayer" loop="1" modestbranding="0"  controls="1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      control: 0
    }
  },
  methods: {
    playCurrentVideo() {
      document.querySelectorAll('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', 'https://www.youtube.com/embed/_4ukb5bMKsw?enablejsapi=1&version=3&playerapiid=ytplayer');
    },
    stopCurrentVideo() {
      document.querySelectorAll('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', 'https://www.youtube.com/embed/_4ukb5bMKsw?enablejsapi=1&version=3&playerapiid=ytplayer');
    },
  }
}
</script>