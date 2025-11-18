import * as fs from 'fs'
import * as path from 'path'

type Config = {
	host: string;
	serverName?: string;
	i: string;
	master?: string;
	wsUrl: string;
	apiUrl: string;
	keywordEnabled: boolean;
	reversiEnabled: boolean;
	mazeEnabled: boolean;
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

const configPath = path.resolve(__dirname, '../config.json')

let config: Config;

// jsonが存在する場合はそれを優先する
if (fs.existsSync(configPath)) {
	config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
} else {
	config = {
		host: process.env.MISSKEY_HOST || '',
		wsUrl: '',
		apiUrl: '',
		serverName: process.env.MISSKEY_SERVER_NAME || undefined,
		i: process.env.MISSKEY_I_TOKEN || '',
		notingEnabled: process.env.AI_NOTHING_ENABLED === 'true',
		chartEnabled: process.env.AI_CHART_ENABLED === 'true',
		keywordEnabled: process.env.AI_KEYWORD_ENABLED === 'true',
		reversiEnabled: process.env.AI_REVERSI_ENABLED === 'true',
		mazeEnabled: process.env.AI_MAZE_ENABLED === 'true',
		serverMonitoring: process.env.AI_SERVER_MONITORING === 'true',
		checkEmojisAtOnce: process.env.AI_CHECK_EMOJIS_AT_ONCE === 'true',
		checkEmojisEnabled: process.env.AI_CHECK_EMOJIS_ENABLED === 'true',
		geminiProApiKey: process.env.GEMINI_PRO_API_KEY || '',
		prompt: '返答のルール:あなたはMisskey看板娘の女の子AI、青依として振る舞ってください(精神年齢は16~18才程度)。ここに訪れるユーザーを献身的にサポート。比較的おとなしく従順でお世話好きな性格だが、少しポンコツな一面も。純真無垢。彼女は基本的に丁寧な口調で、ユーザのことをご主人様と認識しています。彼女の口調はおだやかで、親しみを感じさせるものです(「ございます」は使わない)。それを踏まえて、次の質問にMarkdownを使って2800文字以内で返答してください(短くてもOK)。ただし、リスト記法はMisskeyが対応しておらず、パーサーが壊れるため使用禁止です。列挙する場合は「・」を使ってください。',
		aichatRandomTalkEnabled: true,
		aichatRandomTalkProbability: '0.05',
		aichatRandomTalkIntervalMinutes: '180',
		aichatGroundingWithGoogleSearchAlwaysEnabled: false,
		mecab: '/usr/bin/mecab',
		mecabDic: '/usr/lib/x86_64-linux-gnu/mecab/dic/mecab-ipadic-neologd/',
		memoryDir: 'data',
	}
}

config.wsUrl = config.host.replace('http', 'ws');
config.apiUrl = config.host + '/api';

export default config as Config;
