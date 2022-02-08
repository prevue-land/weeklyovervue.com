<template>
  <section id="newsletter-signup" class="home-section">
    <h1 id="newsletter-header">Get notified about new releases</h1>
    <form
      action="https://www.getrevue.co/profile/WeeklyOverVue/add_subscriber"
      method="post"
      id="revue-form"
      name="revue-form"
      target="_blank"
    >
      <input
        type="email"
        name="member[email]"
        placeholder="Your email address"
        aria-label="Your email address"
        size="32"
        required
      />
      <input type="submit" name="member[subscribe]" value="Subscribe" />
    </form>
    <p>
      By subscribing, you agree with Revue’s
      <a target="_blank" href="https://www.getrevue.co/terms">
        Terms of Service
      </a>
      and
      <a target="_blank" href="https://www.getrevue.co/privacy">
        Privacy Policy
      </a>
    </p>
  </section>
</template>

<style scoped>
#newsletter-header {
  margin-top: 0;
  margin-bottom: 0;
}

#newsletter-signup {
  background-color: #8f3985;
}

input[type='email'],
input[type='submit'] {
  margin-top: 1rem;
  border-radius: 0.5rem;
  font-family: inherit;
}

input[type='email'] {
  border: 2px solid var(--c-brand);
  padding: 0.75rem;
  margin-right: 0.6rem;
}

input[type='submit'] {
  border: none;
  padding: 0.875rem;
  background-color: var(--c-brand);
  color: var(--c-black);
  transition: 0.3s;
}

input[type='submit']:hover {
  background-color: #4fcc94;
  cursor: pointer;
}
</style>
