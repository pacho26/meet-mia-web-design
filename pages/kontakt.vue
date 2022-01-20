<template>
  <div class="contact">
    <h1>Kontaktirajte nas</h1>
    <!-- <p>
      Imate bilo kakvo pitanje za nas? Ideju oko torte za vašu posebnu prigodu?
      Javite nam se putem naše kontakt forme i odgovorit ćemo vam u najkraćem
      roku.
    </p> -->

    <div class="content">
      <div class="form-container">
        <ContactForm class="form" />
        <BaseButton buttonText="Pošalji" />
      </div>

      <div class="info">
        <div class="info__section">
          <p>
            <span class="property-name">Adresa: </span>Vlaška ul. 43, 10000,
            Zagreb
          </p>
        </div>
        <div class="info__section">
          <div class="property-name">Radno vrijeme</div>
          <div>
            <div>
              <p class="working-days">Ponedjeljak - Subota</p>
              <p>08:00 - 21:00</p>
            </div>
            <div>
              <p class="working-days">Nedjelja</p>
              <p>08:00 - 20:00</p>
            </div>
          </div>
        </div>
        <div class="info__section">
          <p>
            <span class="property-name">E-mail: </span> meetmia.cakes@gmail.com
          </p>
        </div>
        <div class="info__section">
          <p><span class="property-name">Mobitel: </span>091 445 5122</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$primary-700: #3c6477;
$primary-800: #2b4755;

.contact {
  h1 {
    color: $primary-800;
  }

  p {
    color: $primary-700;
    font-size: 20px;
    // max-width: 700px
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    gap: 42px;
    justify-content: space-between;
    margin-top: 46px;

    .form-container {
      max-width: 60%;

      .form {
        margin-bottom: 28px;
      }

      @media only screen and (max-width: 936px) {
        max-width: inherit;
      }
    }

    .info {
      &__section {
        margin-bottom: 20px;

        .property-name {
          font-size: 23px;
          font-weight: 600;
          color: $primary-800;
        }
      }

      @media only screen and (max-width: 936px) {
        margin-top: 22px;
      }
    }
  }

  .working-days {
    margin: 0;
    font-weight: 500;
  }

  @media only screen and (max-width: 1548px) {
    margin: 0 3.3vw;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 75px + 46px;

    h1 {
      font-size: 32px;
    }

    p {
      color: $primary-700;
      font-size: 18px;
    }

    .content {
      margin-top: 36px;

      .form-container {
        .form {
          margin-bottom: 24px;
        }
      }

      .info {
        .property-name {
          font-size: 22px;
        }
      }
    }
  }

  @media only screen and (max-width: 592px) {
    margin-top: 75px + 32px;
  }
}
</style>
