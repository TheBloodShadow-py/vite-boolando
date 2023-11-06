<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer-container flex">
        <div class="flex-column footer-section">
          <strong>Boolando s.r.l</strong>
          <div>
            <ul class="flex">
              <li>Informazioni legali</li>
              <li>Informativa sulla privacy</li>
              <li>Diritto di recesso</li>
            </ul>
          </div>
        </div>
        <div class="socials-container">
          <span>Trovaci anche su</span>
          <div class="socials flex">
            <img src="/twitter.svg" alt="twitter" />
            <img src="/facebook.svg" alt="facebook" />
            <img src="/instagram.svg" alt="instagram" />
            <img src="/youtube.svg" alt="youtube" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  @import "../partials/_varibles.scss";
  background-color: $footer-bg-color;
  padding: 25px;
  color: white;
  position: absolute;
  left: 0;
  bottom: -150px;
  width: 100%;
  z-index: 5;
}

.footer-container {
  justify-content: space-between;
  align-items: center;
  span {
    padding-bottom: 8px;
    display: inline-block;
  }
}

.footer-section {
  gap: 10px;
  justify-content: center;
  strong {
    font-size: 22px;
    font-weight: bold;
  }
  ul {
    gap: 20px;
  }
}

.socials {
  gap: 12px;
}
</style>
