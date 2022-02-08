<template>
  <section>
    <h1>About</h1>
    <div id="avatar-and-desc">
      <img id="avatar" src="/mac.png" alt="Image of Mac" />
      <div id="desc">
        <p>
          Hey! My name is Maciej Pędzich, but you can call me
          <strong>Mac</strong>. I started Weekly OverVue, because I'd been
          looking for <strong>active</strong> blogs covering
          <strong>standalone, community</strong> Vue/Nuxt 3 components, plugins,
          themes, etc. <em>in action</em>. Or in other words - their potential
          use-cases in <strong>actual applications</strong>. But as you've
          probably guessed by now - I'd <strong>failed</strong> to find any
          blogs that would match the criteria.
        </p>
        <p>
          Weekly OverVue aims to do so by <strong>regularly</strong> providing
          articles <strong>guiding you</strong> through the development process
          of projects which are <strong>built around</strong> a certain
          <em>third-party</em> component. That way, not only are you given a
          <strong>demonstration</strong> of its capabilities in a
          <em>real-life</em> scenario, but also a
          <strong>potential baseline</strong> for your future Vue or Nuxt
          project.
        </p>
        <p>
          Lastly - each post is
          <a
            href="https://weeklyovervue.hashnode.dev"
            rel="noreferrer noopener"
          >
            available on Hashnode
          </a>
          too, which means you <strong>won't</strong> have to worry about
          <strong>losing access</strong> to any Weekly OverVue article should
          this page become unavailable for whatever reason. So what are you
          waiting for? Check out <strong>the latest articles</strong> down
          below, and make sure to sign up for the <strong>newsletter</strong> so
          as not to miss out on any new articles!
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
h1 {
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;
}

#avatar-and-desc {
  margin-top: 1rem;
  margin-bottom: 4.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.5rem;
}

@media screen and (max-width: 720px) {
  #avatar-and-desc {
    flex-direction: column;
    gap: 0;
  }
}

#avatar {
  max-width: 230px;
  height: auto;
  border-radius: 50%;
}

#desc p {
  line-height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
