<div class="about">

# About Me

Links: <a href="/files/resume.pdf" target="_blank" rel="noreferrer">Résumé</a> | [LinkedIn](https://www.linkedin.com/in/yinfeng-lu/) | [GitHub](https://github.com/soondubu137)

::: details Background
I used to study mathematics and physics, and I was quite good at them. While I was further pursuing mathematics (algebraic topology), however, I realized that math is for the _truly_ brilliant people, of which I am sadly not one. Eventually, I made the decision to switch career.

Graduated from UC Berkeley, I knew how popular the CS61 trilogy is. I gave CS61A a try (available online), and I finished the whole course within two weeks. Taking CS61A was a completely different experience from all the math classes I had been taking. Working with not-so-abstract concepts is actually a lot of fun (I had always enjoyed the abstractness of math).

After finishing CS61A, I took CS61B. After finishing CS61B, I took CS61C and CS188... Putting my knowledge to test, I enrolled in CIS537 at UPenn - graduate-level medical image analysis. At the end of the semester, I was one of only a few students to receive an A+ in the course. Then, I joined a bioinformatics research lab at the school of medicine.

I am currently studying computer science at the University of Chicago. I will graduate in December 2024. I worked as a SWE intern at a startup company during the summer, and I am currently looking for full-time SWE job opportunities.
:::

<div class="education-and-experience">

## Education

- **University of Chicago**

  September 2023 - December 2024

  M.S. Computer Science (Software Engineering)

  🏅 Rank 1 in Entrance Mathematics Exam

- **University of Pennsylvania**

  August 2021 - May 2023

  M.A. Mathematics (Algebraic Topology)

- **University of California, Berkeley**

  January 2018 - May 2021

  B.A. Mathematics

  B.A. Physics

  🏅 High Distinction in General Scholarship

  🏅 Dean's List (4 consecutive semesters)

## Experience

- **Legman.io**

  _Chicago, IL_

  June - August 2024

  **SWE Intern**: core workflow optimization, backend optimization, AWS integration

  Python, FastAPI, Boto3, PostgreSQL, Docker, AWS, Backend, Cloud

  :::details
  **I led the major overhaul of the file processing workflow.**

  Originally, their entire file processing workflow resided on the backend server and it worked sequentially. I made two major improvements to the workflow:

  1. **I separated out the OCR workflow, redesigned it to be distributed, and deployed it as a stand-alone service on AWS.**

     This part was quite challenging. Coming up with the distributed design wasn't very difficult, but it took me several weeks to find an efficient way to deploy it on AWS. At first, I was trying out ECS, but I later realized it was practically impossible to make autoscaling play well with the fast process of OCR. Eventually, I came up with an entirely serverless design, utilizing Lambda, SQS, EventBridge, and DynamoDB. This design performs very well: compared to the original sequential workflow, it boosted OCR processing speed by 93%! Even compared to a multi-threaded optimization that got deployed before my system was integrated, it runs 63% faster.

  2. **I implemented a thread-safe parallelization scheme for the remaining processing workflow.**

     In addition to integrating my OCR service into the backend, I parallelized the rest of the file processing workflow as well. This involves designing an in-memory data structure to coordinate the asynchronous function calls.

  **This overhaul increased the overall file processing speed by approximately 56%.**

  Besides implementing the major overhaul, I also worked on introducing server-side events (SSE) to push real-time file processing updates to the clients, which greatly reduces server and network bandwidth usage compared to what they had before.
  :::

- **Shen Lab**

  _Perelman School of Medicine, University of Pennsylvania_

  August 2022 - May 2023

  **Research Assistant**: automated data cleaning pipeline development

  Python, PyTorch, Bioinformatics

  :::details
  I worked on developing an automated mass-cytometry data pre-gating (cleaning) pipeline with a fellow student. We used machine learning and computer vision (based on U-Net) to train a model that identifies debris and technical artifacts in the collected raw data. Our model achieved over 93% accuracy on new data.

  This workflow introduced an approximately 70% increase in data cleaning efficiency compared to manual processes.
  :::

- **Department of Mathematics**

  _University of Pennsylvania_

  January 2022 - May 2023

  **Thesis Research**

  Thesis: <a href="/files/Thesis.pdf" target="_blank" rel="noreferrer">The Mod-2 Steenrod Algebra and its Applications in Computing Homotopy Groups of Spheres</a>

- **Experimental CMB Cosmology Group**

  _Departments of Physics & Astronomy, UC Berkeley_

  January - July 2019

  **Research Assistant**

</div>

## Skills

3: familiar | 2: have some experience | 1: basic knowledge

- **Go (3)**
  - Gin, Go-zero, Go-kratos (2)
  - gRPC, Protocol Buffer (2)
  - Gorm (2)
  - Makefile (2)
- **Python (3)**
  - Flask, FastAPI (2)
  - Boto3 (3)
  - PyTorch (1)
- **C/C++ (2)**
  - Qt (1)
- **Java (2)**
  - Apache Camel (1)
- **JavaScript, CSS, HTML (2)**
  - React (2)
- **Amazon Web Services (2)**
  - Lambda, EC2, S3, DynamoDB, SQS (2.25)
  - ECS, SNS, IAM (1.5)
- **Misc.**
  - Git (2.5)
  - Linux Bash (2)
  - MySQL, PostgreSQL (2)
  - Redis (1.5)
  - Docker (1.5)
  - RabbitMQ, Apache Kafka, Apache ActiveMQ (1.5)
  - ElasticSearch (1)

</div>
