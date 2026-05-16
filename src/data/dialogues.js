export const dialogues = [
  {
    id: 'greeting',
    title: '问候',
    scene: '在咖啡馆遇到朋友',
    lines: [
      { speaker: 'A', french: 'Bonjour Marie! Ça va?', chinese: '你好 Marie！你好吗？' },
      { speaker: 'B', french: 'Oui, ça va bien! Et toi?', chinese: '是的，我很好！你呢？' },
      { speaker: 'A', french: 'Très bien, merci.', chinese: '很好，谢谢。' },
      { speaker: 'B', french: "Tu veux un café?", chinese: '你想要杯咖啡吗？' },
      { speaker: 'A', french: 'Avec plaisir!', chinese: '非常乐意！' },
    ]
  },
  {
    id: 'restaurant',
    title: '餐厅点餐',
    scene: '在法国餐厅',
    lines: [
      { speaker: 'A', french: 'Bonjour! Une table pour deux, s\'il vous plaît.', chinese: '你好！请给我们两人的桌子。' },
      { speaker: 'B', french: 'Bien sûr. Par ici, s\'il vous plaît.', chinese: '当然。这边请。' },
      { speaker: 'A', french: 'Je voudrais le menu, s\'il vous plaît.', chinese: '请给我菜单。' },
      { speaker: 'B', french: 'Voilà le menu. Je reviens tout de suite.', chinese: '给您菜单。我马上回来。' },
    ]
  },
  {
    id: 'shopping',
    title: '购物',
    scene: '在商店买衣服',
    lines: [
      { speaker: 'A', french: 'Bonjour! Je peux essayer cette robe?', chinese: '你好！我可以试穿这条裙子吗？' },
      { speaker: 'B', french: 'Bien sûr! Les cabines sont là-bas.', chinese: '当然！试衣间在那边。' },
      { speaker: 'A', french: 'Elle est parfaite! Je la prends.', chinese: '太完美了！我买了。' },
      { speaker: 'B', french: 'Parfait! Vous payez à la caisse.', chinese: '好的！请到收银台付款。' },
    ]
  }
];