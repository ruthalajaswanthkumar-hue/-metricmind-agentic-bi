
"""
Global Exception Handler
"""

from fastapi import Request
from fastapi.responses import JSONResponse

class ExceptionHandler:

    @staticmethod
    async def not_found(request: Request, exc):

        return JSONResponse(
            status_code=404,
            content={
                "status": "error",
                "code": 404,
                "message": "Route not found"
            }
        )

    @staticmethod
    async def internal_error(request: Request, exc):

        return JSONResponse(
            status_code=500,
            content={
                "status": "error",
                "code": 500,
                "message": "Internal Server Error"
            }
        )

    @staticmethod
    async def database_error(request: Request, exc):

        return JSONResponse(
            status_code=500,
            content={
                "status": "error",
                "code": 500,
                "message": "Database Error"
            }
        )

    @staticmethod
    async def ai_error(request: Request, exc):

        return JSONResponse(
            status_code=500,
            content={
                "status": "error",
                "code": 500,
                "message": "AI Service Error"
            }
        )

    @staticmethod
    async def validation_error(request: Request, exc):

        return JSONResponse(
            status_code=422,
            content={
                "status": "error",
                "code": 422,
                "message": "Validation Error"
            }
        )
