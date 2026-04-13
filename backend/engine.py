import time

class WorkflowEngine:
    def __init__(self, session_manager=None):
        self.session_manager = session_manager

    @classmethod
    def load_from_json(cls, path, session_manager=None):
        # Mock implementation
        return cls(session_manager=session_manager)

    def run(self, input_data, session_id=None):
        # Mock streaming response
        response_text = f"Hello! This is a mock response to: '{input_data}'. The backend is now connected correctly."
        for char in response_text:
            yield char
            time.sleep(0.01)
