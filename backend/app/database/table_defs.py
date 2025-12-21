TABLE_DEFS = {
    "courses": """
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        level VARCHAR(50) NOT NULL,
        duration_minutes INT NOT NULL
    """,
     "users": """
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        first_name VARCHAR(100),
        last_name VARCHAR(100),
        is_active BOOLEAN DEFAULT TRUE,
        created_at TIMESTAMP DEFAULT NOW()
    """
    # future tables
    # "students": """
    #     id SERIAL PRIMARY KEY,
    #     name VARCHAR(100) NOT NULL,
    #     email VARCHAR(255) UNIQUE NOT NULL
    # """
}