TABLE_DEFS = {
    "courses": """
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        level VARCHAR(50) NOT NULL,
        duration_minutes INT NOT NULL
    """,

    # future tables
    # "students": """
    #     id SERIAL PRIMARY KEY,
    #     name VARCHAR(100) NOT NULL,
    #     email VARCHAR(255) UNIQUE NOT NULL
    # """
}