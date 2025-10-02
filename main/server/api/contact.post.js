export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { firstName, lastName, email, phone, message } = body

  const token = '7510133494:AAGcXP00GbC8RSxiTCWuaHRl7maTa52fpcc'
  const chatId = '-4557080673'

  const text = `
    Новое сообщение с формы контакта:
    Имя: ${firstName}
    Фамилия: ${lastName}
    Email: ${email}
    Телефон: ${phone}
    Сообщение: ${message}
  `

  const url = `https://api.telegram.org/bot${token}/sendMessage`

  try {
    const response = await $fetch(url, {
      method: 'POST',
      body: {
        chat_id: chatId,
        text,
      },
    })

    return {
      success: true,
      message: 'Сообщение отправлено',
      telegramResponse: response,
    }
  } catch (error) {
    console.error('Ошибка отправки в Telegram:', error)
    return {
      success: false,
      message: 'Ошибка отправки сообщения в Telegram',
      error,
    }
  }
})
