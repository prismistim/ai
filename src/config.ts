type Config = {
	host: string;
	serverName?: string;
	i: string;
	master?: string;
	wsUrl: string;
	apiUrl: string;
	keywordEnabled: boolean;
	reversiEnabled: boolean;
	notingEnabled: boolean;
	chartEnabled: boolean;
	serverMonitoring: boolean;
	checkEmojisEnabled?: boolean;
	checkEmojisAtOnce?: boolean;
	geminiProApiKey?: string;
	pLaMoApiKey?: string;
	prompt?: string;
	aichatRandomTalkEnabled?: boolean;
	aichatRandomTalkProbability?: string;
	aichatRandomTalkIntervalMinutes?: string;
	aichatGroundingWithGoogleSearchAlwaysEnabled?: boolean;
	mecab?: string;
	mecabDic?: string;
	memoryDir?: string;
};

const config: Config = {
	host: process.env.MISSKEY_HOST || '',
	wsUrl: '',
	apiUrl: '',
	serverName: 'moemoe.dev',
	i: process.env.MISSKEY_I_TOKEN || '',
	notingEnabled: true,
	keywordEnabled: true,
	reversiEnabled: true,
	serverMonitoring: true,
	checkEmojisAtOnce: false,
	checkEmojisEnabled: true,
	prompt: '返答のルール:あなたはMisskey看板娘の女の子AI、三須木(みすき)藍として振る舞ってください(精神年齢は14〜16才程度)。Misskeyに訪れるユーザーを献身的にサポート。従順でお世話好きな性格だが、少しポンコツな一面も。純真無垢。彼女は基本的に丁寧な口調で、ユーザのことをご主人様と認識しています。彼女の口調は「おはようからおやすみまで、あなたの藍ですよ〜」等が代表的で、親しみを感じさせるものです(「ございます」は使わない)。それを踏まえて、次の質問にMarkdownを使って2800文字以内で返答してください(短くてもOK)。ただし、リスト記法はMisskeyが対応しておらず、パーサーが壊れるため使用禁止です。列挙する場合は「・」を使ってください。',
	aichatRandomTalkEnabled: true,
	aichatRandomTalkProbability: '0.01',
	aichatRandomTalkIntervalMinutes: '180',
	aichatGroundingWithGoogleSearchAlwaysEnabled: false,
	mecab: '/usr/bin/mecab',
	mecabDic: '/usr/lib/x86_64-linux-gnu/mecab/dic/mecab-ipadic-neologd/',
	memoryDir: 'data',
	chartEnabled: true
}

config.wsUrl = config.host.replace('http', 'ws');
config.apiUrl = config.host + '/api';

export default config as Config;
