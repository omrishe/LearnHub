from fastapi import APIRouter, HTTPException
from app.database.decorators import get_con_wr
from app.models.query_model import Query

router=APIRouter(prefix="/query",tags=["placeholder"])

@router.post("/")
async def execute_query(query: Query):
    try:
        cursor = None #place holder ##################################################
        cursor.execute(query.query)
        if cursor.description:
            columns = [col[0] for col in cursor.description]
            result = [dict(zip(columns, row)) for row in cursor.fetchall()]
        else:
            result = {"message": "Query executed successfully", "rows_affected": cursor.rowcount}
        cursor.connection.commit()
        return {"data": result}
    except Exception as e:
        return {"error": str(e)}
    finally:
        cursor.close()
