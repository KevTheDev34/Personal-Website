# Personal-Website

A portfolio website to introduce who I am, what kind of person I am, my interests, and most importantly my skills
My reference is https://brittanychiang.com/


Important information about myself: my background, my interests, my hobbies, and of course my skills

---

## Projects

Gallery of my projects. Interactable. Maybe switch between a grid and list format. Grid would only include a screenshot of the project in a compact form (more useful when I have more projects to show). List format will have a screen shot of the project on the left, a description on the right with the technologies used shown somewhere in a shaded color.

## Contact

Link to download my resume, links to my GitHub and my LinkedIn, and links to my social (Spotify, Steam maybe, idk things that I'm ok people seeing lmao, might need to fix my Instagram)



LeftSide(
<div>
   <h1>Kevyn Ramirez</h1>
   <h5>Aspiring Developer</h5>

   {list of anchors to scroll right side}

   {list of social media links}
   list of </Link> {props = link.url, link.img}
</div>
)


RightSide(
<div>
   <p>description of myself with highlighted words</p>

   <div>
      </Project> {props = proj.screenshot, proj.description, proj.technologies(array of strings)}
      </Project>
   </div>

   </ContactForm>

</div>
)