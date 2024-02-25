const jobs = [
    {
      title: "carpenter",
      image: "carpenter.jpg",
      details:
        "Any work related to wood like making or fixing furniture.",
      openPositions: "2",
      link: "#",
    },
  
    {
      title: "Plumber",
      image: "plumber.jpg",
      details:
        "Install and repair pipes and fixtures that carry water or other fluids in homes and businesses.",
      openPositions: "3",
      link: "#",
    },
  
    {
      title: "Electrician",
      image: "electrician.jpg",
      details:
        "install, maintain, and repair electrical power systems in homes and businesses.",
      openPositions: "1",
      link: "#",
    },
  
    {
      title: "Painter",
      image: "painter.jpg",
      details:
        "apply paint, stain, and coatings to walls and ceilings, buildings and other structures.",
      openPositions: "1",
      link: "#",
    },
  
    {
      title: "Mechanic",
      image: "mechanic.jpg",
      details:
        "performs general maintenance and repairs on cars, trucks and other transportation vehicles.",
      openPositions: "4",
      link: "#",
    },
  
    {
      title: "Maid",
      image: "maid.jpg",
      details:
        "Sweeping, mopping, dusting, and vacuuming to remove dirt, debris, and dust from floors and other surfaces.",
      openPositions: "1",
      link: "#",
    },

    {
      title: "Mason",
      image: "mason.jpg",
      details:
        "works with various materials on a job, specifically stone, concrete and tile..",
      openPositions: "1",
      link: "#",
    },

    {
      title: "Chef",
      image: "chef.jpg",
      details:
        "Chefs plan menus and order supplies and cooks them into a dish.",
      openPositions: "1",
      link: "#",
    },

    {
      title: "Makeup Artist",
      image: "makeup.jpg",
      details:
        "visually transforming people's' appearance via make-up, paint, wigs, and other accessories.",
      openPositions: "1",
      link: "#",
    },

    {
      title: "Tailor",
      image: "tailor.jpg",
      details:
        "apply paint, stain, and coatings to walls and ceilings, buildings and other structures.",
      openPositions: "1",
      link: "#",
    },

    {
      title: "Laundary",
      image: "laundary.jpg",
      details:
        "service where you can drop off your dirty clothes, and the laundry service will wash, dry and package them for you.",
      openPositions: "3",
      link: "#",
    },

    {
      title: "Retailer",
      image: "retailer.png",
      details:
        "purchase goods from a manufacturer or a wholesaler and sell these goods to consumers in small quantities.",
      openPositions: "3",
      link: "#",
    },

    
  ];
  
  const jobsHeading = document.querySelector(".jobs-list-container h2");
  const jobsContainer = document.querySelector(".jobs-list-container .jobs");
  const jobSearch = document.querySelector(".jobs-list-container .job-search");
  
  let searchTerm = "";
  
  if (jobs.length == 1) {
    jobsHeading.innerHTML = `${jobs.length} Job`;
  } else {
    jobsHeading.innerHTML = `${jobs.length} Jobs`;
  }
  
  const createJobListingCards = () => {
    jobsContainer.innerHTML = "";
  
    jobs.forEach((job) => {
      if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        let jobCard = document.createElement("div");
        jobCard.classList.add("job");
  
        let image = document.createElement("img");
        image.src = job.image;
  
        let title = document.createElement("h3");
        title.innerHTML = job.title;
        title.classList.add("job-title");
  
        let details = document.createElement("div");
        details.innerHTML = job.details;
        details.classList.add("details");
  
        let detailsBtn = document.createElement("a");
        detailsBtn.href = job.link;
        detailsBtn.innerHTML = "More Details";
        detailsBtn.classList.add("details-btn");
  
        let openPositions = document.createElement("span");
        openPositions.classList.add("open-positions");
  
        if (job.openPositions == 1) {
          openPositions.innerHTML = `${job.openPositions} open position`;
        } else {
          openPositions.innerHTML = `${job.openPositions} open positions`;
        }
  
        jobCard.appendChild(image);
        jobCard.appendChild(title);
        jobCard.appendChild(details);
        jobCard.appendChild(detailsBtn);
        jobCard.appendChild(openPositions);
  
        jobsContainer.appendChild(jobCard);
      }
    });
  };
  
  createJobListingCards();
  
  jobSearch.addEventListener("input", (e) => {
    searchTerm = e.target.value;
  
    createJobListingCards();
  });