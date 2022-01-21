<template>
  <div class="contact">
    <div class="content">
      <div class="form-container">
        <h1>Kontaktirajte nas</h1>
        <p class="contact-desc">
          Imate bilo kakvo pitanje za nas? Ideju oko torte za vašu posebnu
          prigodu? Javite nam se putem naše kontakt forme i odgovorit ćemo Vam u
          najkraćem roku.
        </p>
        <ContactForm class="form" />
        <BaseButton class="form-btn" buttonText="Pošalji" />
      </div>

      <div class="info">
        <div class="info__section">
          <p class="property-name">Adresa</p>
          <p>Vlaška ul. 43, 10000, Zagreb</p>
        </div>
        <div class="info__section">
          <div class="property-name">Radno vrijeme</div>
          <div>
            <div>
              <p class="working-days">Ponedjeljak - Subota</p>
              <p class="mb-2">08:00 - 21:00</p>
            </div>
            <div>
              <p class="working-days">Nedjelja</p>
              <p>08:00 - 20:00</p>
            </div>
          </div>
        </div>
        <div class="info__section">
          <p class="property-name">E-mail</p>
          <p>meetmia.cakes@gmail.com</p>
        </div>
        <div class="info__section">
          <p class="property-name">Mobitel</p>
          <p>+385 91 445 5122</p>
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
    text-align: left;
  }

  p {
    color: $primary-700;
    font-size: 19px;
    color: #666666;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    gap: 12%;
    margin-top: 46px;

    .contact-desc {
      font-size: 18px;
      max-width: 700px;
      margin-bottom: 52px;
      text-align: left;
    }

    .form-container {
      max-width: 60%;

      .form {
        margin-bottom: 28px;
      }

      @media only screen and (max-width: 1097px) {
        max-width: inherit;
      }
    }

    .info {
      margin-top: 182px;

      &__section {
        margin-bottom: 20px;

        .property-name {
          font-size: 22px;
          font-weight: 600;
          color: $primary-800;
          margin-bottom: 0;

          &:first-of-type {
            padding-top: 0;
          }
        }
      }
    }

    @media only screen and (max-width: 1097px) {
      gap: 136px;
      justify-content: center;
      text-align: center;

      .info {
        margin-top: 0;
      }

      .form-btn {
        width: 100%;
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
