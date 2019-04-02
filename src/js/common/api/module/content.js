import axios from 'axios'

import { apiConfig } from '../config'

export const getHeader = () => {
  const targetUrl = `${apiConfig.baseUrl}/${apiConfig.fetchContentUrl}/header?token=${apiConfig.token}`
  return axios.get(targetUrl)
}

export const getFooter = () => {
  const targetUrl = `${apiConfig.baseUrl}/${apiConfig.fetchContentUrl}/footer?token=${apiConfig.token}`
  return axios.get(targetUrl)
}

export const getBlogTags = () => {
  const targetUrl = `${apiConfig.baseUrl}/${apiConfig.fetchContentUrl}/tags?token=${apiConfig.token}`
  return axios.get(targetUrl)
}

export const getBlogPosts = ({ sort, limit, skip, tag }) => {
  let targetUrl = `${apiConfig.baseUrl}/${apiConfig.fetchContentUrl}/blog-posts/?token=${apiConfig.token}&sort=${sort}&limit=${limit}&skip=${skip}`
  if (tag) {
    targetUrl = targetUrl + `&tag=${tag}`
  }
  return axios.get(targetUrl)
}

export const getIndividualBlogPost = (postUrl) => {
  const targetUrl = `${apiConfig.baseUrl}/${apiConfig.fetchContentUrl}/blog-post?token=${apiConfig.token}&slug=/${postUrl}`
  return axios.get(targetUrl)
}

export const getCaseStudyList = () => {
  const targetUrl = `${apiConfig.baseUrl}/${apiConfig.fetchContentUrl}/case-studies?token=${apiConfig.token}`
  return axios.get(targetUrl)
}

export const getCaseStudy = caseStudy => {
  const targetUrl = `${apiConfig.baseUrl}/${apiConfig.fetchContentUrl}/case-studies/${caseStudy}?token=${apiConfig.token}`
  return axios.get(targetUrl)
}
