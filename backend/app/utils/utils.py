import logging
from functools import wraps
import traceback
from fastapi import HTTPException

# Configure logging
logging.basicConfig(
    filename="errors.log",
    filemode="a",
    level=logging.DEBUG,
    format="%(asctime)s - %(levelname)s - %(message)s"
)

def log_errors(func,e):
            # Log full traceback to file
            print(f"[DEBUG] Exception in {func.__name__}: {e}") # Added for debugging
            logging.error(f"Exception in {func.__name__}:\n{traceback.format_exc()}")
        