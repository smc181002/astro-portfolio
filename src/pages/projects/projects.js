const projectList = [
  {
    title: "Testing Parallelism in hadoop HDFS storage",
    tech: [
      {name: "Hadoop", img: "/assets/hadoop.svg"}
    ],
    writer: {
      img: "https://avatars.githubusercontent.com/u/53662575", 
      github: "smc181002",
    },
    contributors: [
      {img: "https://avatars.githubusercontent.com/u/51798035", github: "yogesh174"},
      {img: "https://avatars.githubusercontent.com/u/71126139", github: "BurriAkhilReddy"},
    ]
  },
  {
    title: "Checking if Terraform retains root disk  in EC2",
    tech: [
      {name: "Terraform", img: "/assets/terraform.svg"},
      {name: "AWS", img: "/assets/aws.svg"},
    ],
    writer: {
      img: "https://avatars.githubusercontent.com/u/53662575", 
      github: "smc181002",
    },
    contributors: [
      {img: "https://avatars.githubusercontent.com/u/51798035", github: "yogesh174"},
      // {img: "https://avatars.githubusercontent.com/u/71126139", github: "BurriAkhilReddy"},
    ]
  },
]

const blob = (title) => (title.replace(/\s+/g, '-').toLowerCase())

export {projectList, blob};