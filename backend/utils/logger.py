import logging
import os

os.makedirs("backend/logs", exist_ok=True)

logging.basicConfig(
    filename="backend/logs/backend.log",
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(message)s"
)
logger = logging.getLogger("metricmind")