import React from 'react'
import './about.scss'

export default function About() {
  return (
  <>
  <header>
    <div class="title">
        <h3>The creative crew</h3>
    </div>
    <div class="content">
        <h5>who we are</h5>
        <p>We are team of creatively diverse. driven. innovative individuals working in various locations from the world.</p>
    </div>
</header>

<main>
    <div class="profile">
        <figure data-value="product owner">
            <img src="https://vetri-suriya.web.app/devchallenges/team-page/photo1.png" alt="" />
            <figcaption>bill mahoney</figcaption>
        </figure>
    </div>

    <div class="profile">
        <figure data-value="art director">
            <img src="https://vetri-suriya.web.app/devchallenges/team-page/photo2.png" alt="" />
            <figcaption>saba cabrera</figcaption>
        </figure>
    </div>

    <div class="profile">
        <figure data-value="tech lead">
            <img src="https://vetri-suriya.web.app/devchallenges/team-page/photo3.png" alt="" />
            <figcaption>shae le</figcaption>
        </figure>
    </div>

    <div class="profile">
        <figure data-value="ux designer">
            <img src="https://vetri-suriya.web.app/devchallenges/team-page/photo4.png" alt="" />
            <figcaption>skylah lu</figcaption>
        </figure>
    </div>

    <div class="profile">
        <figure data-value="developer">
            <img src="https://vetri-suriya.web.app/devchallenges/team-page/photo5.png" alt="" />
            <figcaption>griff richards</figcaption>
        </figure>
    </div>

    <div class="profile">
        <figure data-value="developer">
            <img src="https://vetri-suriya.web.app/devchallenges/team-page/photo6.png" alt="" />
            <figcaption>stan john</figcaption>
        </figure>
    </div>

</main>

<footer>
<p>Created by - <a href="https://vetri-suriya.web.app/"><span>Vetri Suriya</span></a></p>
</footer>
</>
  )
}

