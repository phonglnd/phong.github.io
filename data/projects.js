export var projects = [
  {
    "name": "Bot detection bypass",
    "from_month": "",
    "from_year": 2023,
    "to_month": "",
    "to_year": 2024,
    "abstract": "Collaborated with team members to develop a bot detection service that is able to bypass source tracking sites for eCommerce domains. Utilized Python image processing libraries to address CAPTCHA vision challenges and implement solutions for solving CAPTCHAs."
  },
  {
    "name": "Booking shipping service",
    "from_month": "",
    "from_year": 2023,
    "to_month": "",
    "to_year": 2023,
    "abstract": "Collaborated with team members to develop a booking shipping service using the Django application in order to enhance the E2E eCommerce platform. Utilized Django framework in the booking shipping service that seamlessly integrates with various global carriers' platforms for efficient shipment handling, and integrated with Celery to distribute tasks and consolidate progress results, enabling smooth processing of a large volume of shipments with a structured booking flow."
  },
  {
    "name": "Logistics Intelligence alerting center",
    "from_month": 12,
    "from_year": 2022,
    "to_month": 2,
    "to_year": 2023,
    "abstract": "Led, designed, and implemented an alert center service used for Logistics Intelligence through a Django application, and integrated with Dagster for scheduling and executing evaluation by metrics from AWS Redshift database and Jaspersoft as a third-party tool, to trigger alerts via Webhook and e-mails."
  },
  {
    "name": "Redshift data pipeline by WAL CDC",
    "from_month": "",
    "from_year": 2022,
    "to_month": "",
    "to_year": 2022,
    "abstract": "Designed solution, and implemented with team members to establish pipelines for efficiently synchronizing 4-5 million records daily between databases using Write-Ahead Logging (WAL) Change Data Capture (CDC). The process involves consuming CDC messages from Apache Kafka triggered by the Debezium connector, streaming them through table API with PyFlink and Scala Flink, and subsequently importing the collected data in batches into AWS Redshift DB."
  },
  {
    "name": "Data Migration Tools",
    "from_month": "",
    "from_year": 2021,
    "to_month": "",
    "to_year": 2021,
    "abstract": "Utilized the Celery framework to develop a tool for executing migration tasks within a batch processing system, offering significant assistance in synchronizing data between databases, updating outdated data to a newer format, and modifying data structures. The Migration Tool has been constructed using a Django script-based approach with Redis serving as a broker and customized auto-scaling for resource management via K8s API. This has led to a reduction in the migration time from 1 day to 2 hours for processing 1 million records."
  },
  {
    "name": "Redshift Sink project: Sync data to Redshift DB",
    "from_month": "",
    "from_year": 2021,
    "to_month": "",
    "to_year": 2021,
    "abstract": "Developed and maintained the system responsible for synchronizing 1-2 million entries daily from a source database to the AWS Redshift analytic database. Python application undertook the ETL process, consumed data from a Kafka message queue, triggered by an application, performed aggregation and transformation, and then loaded it into the Redshift database via AWS S3 storage. This data synchronization process ensures that the Redshift DB is up-to-date and readily available for analytics and reporting purposes."
  },
  {
    "name": "Applying CNN For Cardiac Arrhythmia Classification Using ECG Data",
    "from_month": "",
    "from_year": 2021,
    "to_month": "",
    "to_year": 2021,
    "abstract": "Researched the CNN+ResNet structure and Electrocardiography paired with examining ECG dataset in order to create a model capable of categorizing 9 different types of cardiac arrhythmia using Python and Keras TensorFlow."
  }
]