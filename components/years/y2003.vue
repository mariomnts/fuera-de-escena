<template>
  <main :class="`p${position}`" class="year">
    <LayoutYearsHeader :year="year" :age="age" :position="position" />

    <LayoutYearsBody>
      <template #0>
        <div class="header">
          <h1>
            La familia tradicional <br />
            desprotegida, según Rouco
          </h1>
        </div>

        <div class="body">
          <div class="row">
            <div class="col3">
              <p>
                El presidente de la Conferencia Episcopal española
                <b>Rouco Varela</b> dijo que el
                <b>matrimonio homosexual</b> crearía una
              </p>

              <h2>
                “sociedad envejecida, donde niños y jóvenes sufrirán por las
                rupturas de sus padres y por la pérdida del ambiente familiar”
              </h2>

              <p>
                Las consecuencias no serían sólo emocionales, también
                económicas:
                <b>“quebraría el sistema de la seguridad social”</b>.
              </p>

              <p>O sea, el anticristo.</p>
            </div>

            <div class="col45">
              <nuxt-img
                format="webp"
                sizes="400px:400px 900px:650px 1000px:500px 1100px:550px"
                src="/img/2003.png"
                alt="Rouco Varela"
              />
            </div>
          </div>
        </div>
      </template>
    </LayoutYearsBody>
  </main>
</template>

<script setup>
defineProps({ age: Number, position: Number });

const year = 2003;
</script>

<style lang="scss" scoped>
.year,
.year :deep(header h2) {
  background: $green;
}

@include bkYearColumns {
  .body .row {
    gap: 10px !important;
  }
}
</style>
