import Image1 from "public/images/section-placeholders/1.jpg";
import Image2 from "public/images/section-placeholders/2.jpg";
import Image3 from "public/images/section-placeholders/3.jpg";
import Image4 from "public/images/section-placeholders/4.jpg";

const uno = {
  meta: {},
  sections: [
    {
      meta: {
        type: "navbar",
        layout: "one",
      },
      theme: {
        backgroundColor: "#ffffff",
        linkColor: "#555555",
      },
      data: {
        links: [
          {
            label: "Home",
            link: "/",
          },
          {
            label: "About us",
            link: "/about-us",
          },
        ],
      },
    },
    {
      meta: {
        type: "hero",
        layout: "one",
        heading: "Welcome to our website",
        subHeading:
          "Building products is hard. We've been building applications for over two decades. Let us help you.",
        image: Image1,
      },
      theme: {
        backgroundColor: "#f2f2f2",
        textColor: "#555555",
        buttonBackgroundColor: "#555555",
        buttonTextColor: "#ffffff",
      },
      data: {
        buttons: [
          {
            label: "Read more",
            link: "/read-more",
          },
          {
            label: "Contact us",
            link: "/contact-us",
          },
        ],
      },
    },
    {
      meta: {
        type: "features",
        layout: "one",
        heading: "We've developed and shipped over 500 products",
      },
      theme: {
        backgroundColor: "#ffffff",
        textColor: "#555555",
      },
      data: {
        cards: [
          {
            image: Image2,
            heading: "E-commerce application",
            subHeading:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis commodo enim. Morbi eleifend lacinia massa, id elementum lorem lacinia in.",
          },
          {
            image: Image3,
            heading: "Booking application",
            subHeading:
              "Proin mauris nisl, scelerisque quis ante non, scelerisque tempor dui. In sit amet dui blandit nunc consequat volutpat. In euismod felis sed velit sodales finibus.",
          },
          {
            image: Image4,
            heading: "Learning management system",
            subHeading:
              "In et augue eget ipsum congue suscipit at in urna. Integer non nibh vitae purus maximus bibendum nec eu metus. Nulla facilisi.",
          },
        ],
      },
    },
    {
      meta: {
        type: "footer",
        layout: "one",
      },
      theme: {
        backgroundColor: "#000000",
        linkColor: "#ffffff",
      },
      data: {
        links: [
          {
            label: "Home",
            link: "/",
          },
          {
            label: "About us",
            link: "/about-us",
          },
        ],
      },
    },
  ],
};

export default uno;
