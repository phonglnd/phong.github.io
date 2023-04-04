export var projects = [
  {
    "name": "Logistics Intelligence alerting center",
    "from_month": 12,
    "from_year": 2022,
    "to_month": 2,
    "to_year": 2023,
    "abstract": "Build a service used for Logistics Intelligence alerting by a Django application-based allowing users to configure their own alerts, along with a Dagster service handling schedule and execute the metrics evaluation and triggering alerts. The application is able to get the metrics from the Redshift database via Jaspersoft as a third party."
  },
  {
    "name": "Redshift data pipeline by WAL CDC",
    "from_month": "",
    "from_year": 2022,
    "to_month": "",
    "to_year": 2022,
    "abstract": "Build a service with teammates to populate pipelines to adapt syncing 4-5 millions of records per day between DBs by WAL CDC. The pipeline consumes CDC messages from Kafka which is triggered via Debezium connector, stream to table API with PyFlink and Scala Flink before importing collected data-by-batches to Redshift DB."
  },
  {
    "name": "Migration Tools",
    "from_month": "",
    "from_year": 2021,
    "to_month": "",
    "to_year": 2021,
    "abstract": "Take advantage of Celery library to implement a tool for migration tasks under batch processing architecture, which is really helpful to sync data between DBs, migrate obsoleted data to a newer format, change the data structure, etc. This Migration Tool has been built with Django script-based, Redis as a broker along with customizing auto-scaling to manage resources via K8s API. This helps to reduce the migration time of 1 million records from 1 days to 2 hours."
  },
  {
    "name": "Redshift Sink project: Sync data to Redshift DB",
    "from_month": "",
    "from_year": 2021,
    "to_month": "",
    "to_year": 2021,
    "abstract": "Build and maintain the service which is used to sync 1-2 millions of records per day from a source DB to Redshift analytic DB. This Python project is built to consume data from Kafka message queue which is triggered from an application, do aggregation and transformation to import to Redshift DB via AWS S3 storage."
  },
  {
    "name": "Applying CNN For Cardiac Arrhythmia Classification Using ECG Data",
    "from_month": "",
    "from_year": 2021,
    "to_month": "",
    "to_year": 2021,
    "abstract": "Researched CNN+ResNet architecture and Electrocardiography (ECG) combined with analyzing ECG dataset to design the model which can classify 9 types of cardiac arrhythmia in Python and Keras TensorFlow."
  }
]