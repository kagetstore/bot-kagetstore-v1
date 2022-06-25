let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0812-7930-1794]
│ •  [0857-6350-0823]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
