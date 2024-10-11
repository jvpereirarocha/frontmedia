async function fetchAllVideos(url) {
  try {
    const response = await fetch(url)
    console.log(`Response => ${response}`)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

async function fetchOneVideo(url) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    return { error: `Erro ao buscar as informações do vídeo` }
  }
}

async function saveVideo(url, data, isUpdating = false) {
  const httpMethod = isUpdating === false ? 'POST' : 'PUT'
  try {
    const title = data.title
    const videoUrl = data.videoLink
    const response = await fetch(url, {
      method: httpMethod,
      body: JSON.stringify({ title: title, url: videoUrl }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (!response.status === 200 && !response.status === 201) {
      throw new Error(`Response status: ${response}`)
    }
    const responseText = await response.json()
    return responseText
  } catch (error) {
    return { error: error }
  }
}

async function deleteVideo(url) {
  try {
    const response = await fetch(url, {
      method: 'DELETE'
    })
    if (!response.status === 200 && !response.status === 204) {
      throw new Error(`${response || 'Erro'}`)
    }
    return { success: 'Deletado' }
  } catch (error) {
    return { error }
  }
}

export { fetchAllVideos, fetchOneVideo, saveVideo, deleteVideo }
