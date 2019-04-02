import axios from 'axios'

import { mailChimpConfig } from '../config'

export const subscribe = (email) => {
  const targetUrl = `/automations/${mailChimpConfig.workflowId}/emails/${mailChimpConfig.emailId}/queue`
  return axios.post(
    targetUrl,
    { email_address: email },
    {
      "headers": {
        "Authorization": `apiKey ${mailChimpConfig.apiKey}`,
        "Content-Type": "application/json"
      }
    }
  )
}
