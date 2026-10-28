import { createWorker } from "../../apps/api/src/worker.mjs";
// Only the harness binds this local, emulated mailbox; it is never reachable through an API.
export default createWorker(async ({ email, url }, env) => env.TEST_MAIL.put(email, url));
