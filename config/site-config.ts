export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"; // First number is width, second is height
export type GridItemType = "social" | "equipment" | "mentor" | "project";
export type EqiupmentItem = {
  title: string;
  link: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  /* Mentor */
  promotion?: string;
  price?: string;
  oldPrice?: string;
  /* Project */
  stars?: number;
  /* Equipments */
  equipments?: EqiupmentItem[];
  image?: string;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "social",
    title: "About me",
    username: "@thierno",
    description:
      "My goal is to share the concepts I learn, the projects I build, and the tasks I perform regarding DevOps and System Admin.",
    color: "#FF0000",
    buttonLink: "https://github.com/thierno953",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Linkedin",
    icon: "linkedin",
    username: "@thierno",
    buttonTitle: "Join",
    buttonLink: "https://www.linkedin.com/in/thierno-barry-0b8527203/",
    color: "#5865F2",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Github",
    icon: "github",
    username: "@thierno",
    buttonTitle: "Follow",
    buttonLink: "https://github.com/thierno953",
    color: "#070707",
  },
  {
    layout: "2x4",
    type: "equipment",
    title: "Terraform Scripts",
    image: "/terraform.png",
    equipments: [
      {
        title: "Variables",
        link: "https://github.com/thierno953/terraform-scripts/tree/main/variables",
      },
      {
        title: "Loops",
        link: "https://github.com/thierno953/terraform-scripts/tree/main/loops",
      },
      {
        title: "Conditional",
        link: "https://github.com/thierno953/terraform-scripts/tree/main/conditional",
      },
      {
        title: "Instances",
        link: "https://github.com/thierno953/terraform-scripts/tree/main/instances",
      },
      {
        title: "Provisioning Infrastructure",
        link: "https://github.com/thierno953/terraform-scripts/tree/main/provisioning-infrastructure",
      },
      {
        title: "Provisioning Resources",
        link: "https://github.com/thierno953/terraform-scripts/tree/main/provisioning-resources",
      },
      {
        title: "Workspaces Modules",
        link: "https://github.com/thierno953/terraform-scripts/tree/main/workspaces-modules",
      },
    ],
  },
  {
    layout: "2x2",
    type: "social",
    title: "Jenkins",
    username: "@thierno",
    buttonLink: "https://github.com/thierno953/Jenkins-SonarQube-Maven",
    color: "#1DA1F2",
    description:
      "My goal is to share the concepts I learn, the projects I build, and the tasks I perform regarding DevOps and System Admin.",
  },
  {
    layout: "2x1",
    type: "mentor",
    title: "Docker",
    icon: "superpeer",
    buttonLink: "https://github.com/thierno953/Docker",
  },
  {
    layout: "2x1",
    type: "mentor",
    title: "Docker Swarm",
    icon: "superpeer",
    buttonLink: "https://github.com/thierno953/Docker-Swarm",
  },
  {
    layout: "2x1",
    type: "project",
    title: "Vagrant",
    icon: "superpeer",
    buttonLink: "https://github.com/thierno953/Vagrant",
  },
  {
    layout: "2x4",
    type: "equipment",
    title: "Kubernetes",
    image: "/kube.webp",
    equipments: [
      {
        title: "Ingress",
        link: "https://github.com/thierno953/Kubernetes/tree/main/Ingress",
      },
      {
        title: "Mongo",
        link: "https://github.com/thierno953/Kubernetes/tree/main/mongo",
      },
      {
        title: "ConfigMap",
        link: "https://github.com/thierno953/Kubernetes/blob/main/ConfigMap.yml",
      },
      {
        title: "DaemonSet and StatefulSet",
        link: "https://github.com/thierno953/Kubernetes/blob/main/DaemonSet-StatefulSet.yml",
      },
      {
        title: "Deployment",
        link: "https://github.com/thierno953/Kubernetes/blob/main/Deployment.yml",
      },
      {
        title: "PV and PVC",
        link: "https://github.com/thierno953/Kubernetes/blob/main/PV-PVC.yml",
      },
      {
        title: "Replicaset",
        link: "https://github.com/thierno953/Kubernetes/blob/main/Replicaset.yml",
      },
      {
        title: "Replication-Controller",
        link: "https://github.com/thierno953/Kubernetes/blob/main/ReplicationController.yml",
      },
      {
        title: "Secret",
        link: "https://github.com/thierno953/Kubernetes/blob/main/Secret.yml",
      },
    ],
  },
  {
    layout: "2x2",
    type: "social",
    title: "Full-stack Multilingual Blog with Next.js 13",
    username: "@batuhanbilginn",
    description:
      "Learn how to build a full-stack, multilingual and high performant blog website with Next.js 13.4 and Directus.",
    icon: "udemy",
    buttonTitle: "Enroll",
    buttonSecondaryText: "%90 OFF",
    buttonLink:
      "https://www.udemy.com/course/nextjs13-fullstack-blog-seo-internationalization/?couponCode=MAKRDEVFELLOWS2",
  },
  {
    layout: "2x1",
    type: "project",
    title: "Prometheus",
    icon: "superpeer",
    buttonLink: "https://github.com/thierno953/Prometheus",
  },
  {
    layout: "2x4",
    type: "equipment",
    title: "Ansible Scripts",
    image: "/attune_images.jpg",
    equipments: [
      {
        title: "Install terraform on ubuntu ansible",
        link: "https://github.com/thierno953/ansible-scripts/tree/main/Install-terraform-on-ubuntu-ansible",
      },
      {
        title: "Install docker on ubuntu using ansible",
        link: "https://github.com/thierno953/ansible-scripts/tree/main/install-docker-on-ubuntu-using-ansible",
      },
      {
        title: "Install jenkins on ubuntu",
        link: "https://github.com/thierno953/ansible-scripts/tree/main/install-jenkins-on-ubuntu.yml",
      },
      {
        title: "Install jenkins using docker on ubuntu ansible",
        link: "https://github.com/thierno953/ansible-scripts/tree/main/install-jenkins-using-docker-on-ubuntu-ansible",
      },
      {
        title: "Install mongodb on ubuntu ",
        link: "https://github.com/thierno953/ansible-scripts/tree/main/install-mongodb-on-buntu-22.04-ansible",
      },
      {
        title: "Install mysql-8 on ubuntu",
        link: "https://github.com/thierno953/ansible-scripts/tree/main/install-mysql-8-on-ubuntu-22.04-ansible",
      },
    ],
  },
];

export const siteConfig = {
  creator: "Thierno Barry",
  title: "Developer & DevOps",
  bio: "NodeJS Developer / Junior DevOps Engineer.",
  location: "Brussels",
  locationLink:
    "https://www.google.com/maps/place/Bruxelles/@50.8552034,4.2930172,12z/data=!3m1!4b1!4m6!3m5!1s0x47c3a4ed73c76867:0xc18b3a66787302a7!8m2!3d50.8476424!4d4.3571696!16zL20vMDJybmJ2?entry=ttu",
  email: "thiernobarry554@gmail.com",
  items: GridItems,
} as const;
