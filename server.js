const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const CONFIG_PATH = path.join(__dirname, 'data', 'config.json');

app.use(express.json({ limit: '2mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// 读取配置
app.get('/api/config', (req, res) => {
  try {
    const data = fs.readFileSync(CONFIG_PATH, 'utf8');
    res.json(JSON.parse(data));
  } catch (e) {
    res.status(500).json({ error: '读取配置失败' });
  }
});

// 保存配置
app.post('/api/config', (req, res) => {
  try {
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(req.body, null, 2), 'utf8');
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: '保存失败' });
  }
});

app.listen(PORT, () => {
  console.log(`落地页服务已启动: http://localhost:${PORT}`);
  console.log(`后台管理: http://localhost:${PORT}/admin.html`);
});
