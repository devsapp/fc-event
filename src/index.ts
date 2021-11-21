import logger from './common/logger';

const fse = require('fs-extra');
import path from 'path';
import inquirer from 'inquirer';
import {InputProps} from './common/entity';

logger.setContent("FC-EVENT")
export default class ComponentDemo {
    /**
     * OSS 触发器事件
     * @param inputs
     * @returns
     */
    public async oss(inputs: InputProps) {
        await fse.mkdirs('./event-template/');
        const templateData = await fse.readFileSync(path.join(__dirname, '../', 'event-template/oss.json'))
        await fse.writeFileSync(path.join('./event-template/', 'oss-event.json'), templateData);
        logger.success(`

      OSS event template created successfully.
      
      👓 Event Template Path: ${path.join('./event-template/', 'oss-event.json')}
      
      You could user fc/fc-api component invoke method and specify the event.
      E.g: [s projectName invoke --event-file  ${path.join('./event-template/', 'oss-event.json')}]
      
      More information about OSS Trigger: 
        📝 https://help.aliyun.com/document_detail/74763.htm
      
      `)
    }

    /**
     * SLS 触发器事件
     * @param inputs
     * @returns
     */
    public async sls(inputs: InputProps) {
        await fse.mkdirs('./event-template/');
        const templateData = await fse.readFileSync(path.join(__dirname, '../', 'event-template/sls.json'))
        await fse.writeFileSync(path.join('./event-template/', 'sls-event.json'), templateData);
        logger.success(`

      SLS event template created successfully.
      
      👓 Event Template Path: ${path.join('./event-template/', 'sls-event.json')}
      
      You could user fc/fc-api component invoke method and specify the event.
      E.g: [s projectName invoke --event-file  ${path.join('./event-template/', 'sls-event.json')}]
      
      More information about SLS Trigger: 
        📝 https://help.aliyun.com/document_detail/84092.htm
      
      `)
    }

    /**
     * http 触发器事件
     * @param inputs
     * @returns
     */
     public async http(inputs: InputProps) {
        await fse.mkdirs('./event-template/');
        const templateData = await fse.readFileSync(path.join(__dirname, '../', 'event-template/http.json'))
        await fse.writeFileSync(path.join('./event-template/', 'http-parameter.json'), templateData);
        logger.success(`

      HTTP parameter template created successfully.
      
      👓 Parameter Template Path: ${path.join('./event-template/', 'http-parameter.json')}
      
      You could user fc/fc-api component invoke method and specify the event.
      E.g: [s projectName invoke --event-file  ${path.join('./event-template/', 'http-parameter.json')}]
      
      More information about HTTP Trigger: 
        📝 https://help.aliyun.com/document_detail/71229.html
      
      `)
    }

    /**
     * TableStore 触发器事件
     * @param inputs
     * @returns
     */
    public async tablestore(inputs: InputProps) {
        await fse.mkdirs('./event-template/');
        const templateData = await fse.readFileSync(path.join(__dirname, '../', 'event-template/tablestore.json'))
        await fse.writeFileSync(path.join('./event-template/', 'tablestore-event.json'), templateData);
        logger.success(`

      TableStore event template created successfully.
      
      👓 Event Template Path: ${path.join('./event-template/', 'tablestore-event.json')}
      
      You could user fc/fc-api component invoke method and specify the event.
      E.g: [s projectName invoke --event-file  ${path.join('./event-template/', 'tablestore-event.json')}]
      
      More information about TableStore Trigger: 
        📝 https://help.aliyun.com/document_detail/169673.htm
      
      `)
    }

    /**
     * MNS 触发器事件
     * @param inputs
     * @returns
     */
    public async mns(inputs: InputProps) {
        await fse.mkdirs('./event-template/');

        const cicdPlatform: any = await inquirer.prompt([{
            type: 'list',
            name: 'platform',
            'message': '请选择MNS事件类型',
            choices: [
                {name: 'event格式设置为STREAM， 消息中不含消息属性（MessageAttributes）时', value: '0'},
                {name: 'event格式设置为STREAM， 消息中含有消息属性（MessageAttributes）时', value: '1'},
                {name: 'event格式设置为JSON， 消息中不含消息属性（MessageAttributes）时', value: '2'},
                {name: 'event格式设置为JSON， 消息中含有消息属性（MessageAttributes）时', value: '3'},
            ]
        }]);
        let templateData
        let targetFile
        switch (cicdPlatform.platform) {
            case '0':
                templateData = 'hello topic'
                targetFile = 'mns-stream-without-message-attributes.json'
                await fse.writeFileSync(path.join('./event-template/', targetFile), templateData);
                break;
            case '1':
                templateData = await fse.readFileSync(path.join(__dirname, '../', 'event-template/mns-stream.json'))
                targetFile = 'mns-stream-with-message-attributes.json'
                await fse.writeFileSync(path.join('./event-template/', targetFile), templateData);
                break;
            case '2':
                templateData = await fse.readFileSync(path.join(__dirname, '../', 'event-template/mns-without-MessageAttributes.json'))
                targetFile = 'mns-json-without-message-attributes.json'
                await fse.writeFileSync(path.join('./event-template/', targetFile), templateData);
                break;
            case '3':
                templateData = await fse.readFileSync(path.join(__dirname, '../', 'event-template/mns-with-MessageAttributes.json.json'))
                targetFile = 'mns-json-with-message-attributes.json'
                await fse.writeFileSync(path.join('./event-template/', targetFile), templateData);
                break;
            default:
                break;
        }

        logger.success(`

      MNS event template created successfully.
      
      👓 Event Template Path: ${path.join('./event-template/', targetFile)}
      
      You could user fc/fc-api component invoke method and specify the event.
      E.g: [s projectName invoke --event-file  ${path.join('./event-template/', targetFile)}]
      
      More information about MNS Trigger: 
        📝 https://help.aliyun.com/document_detail/97022.htm
      
      `)
    }

    /**
     * CDN 触发器事件
     * @param inputs
     * @returns
     */
    public async cdn(inputs: InputProps) {
        await fse.mkdirs('./event-template/');

        const cicdPlatform: any = await inquirer.prompt([{
            type: 'list',
            name: 'platform',
            'message': '请选择MNS事件类型',
            choices: [
                {name: 'LogFileCreated事件', value: '0'},
                {name: 'CachedObjectsRefreshed事件', value: '1'},
                {name: 'CachedObjectsPushed事件', value: '2'},
                {name: 'CachedObjectsBlocked事件', value: '3'},
                {name: 'CdnDomainStarted事件', value: '4'},
                {name: 'CdnDomainStopped事件', value: '5'},
                {name: 'CdnDomainAdded事件', value: '6'},
                {name: 'CdnDomainDeleted事件', value: '7'}
            ]
        }]);
        let templateData
        let targetFile
        switch (cicdPlatform.platform) {
            case '0':
                templateData = await fse.readFileSync(path.join(__dirname, '../', 'event-template/cdn-LogFileCreated.json'))
                targetFile = 'cdn-LogFileCreated.json'
                await fse.writeFileSync(path.join('./event-template/', targetFile), templateData);
                break;
            case '1':
                templateData = await fse.readFileSync(path.join(__dirname, '../', 'event-template/cdn-CachedObjectsRefreshed.json'))
                targetFile = 'cdn-CachedObjectsRefreshed.json'
                await fse.writeFileSync(path.join('./event-template/', targetFile), templateData);
                break;
            case '2':
                templateData = await fse.readFileSync(path.join(__dirname, '../', 'event-template/cdn-CachedObjectsRefreshed.json'))
                targetFile = 'cdn-CachedObjectsPushed.json'
                await fse.writeFileSync(path.join('./event-template/', targetFile), templateData);
                break;
            case '3':
                templateData = await fse.readFileSync(path.join(__dirname, '../', 'event-template/cdn-CachedObjectsRefreshed.json'))
                targetFile = 'cdn-CachedObjectsBlocked.json'
                await fse.writeFileSync(path.join('./event-template/', targetFile), templateData);
                break;
            case '4':
                templateData = await fse.readFileSync(path.join(__dirname, '../', 'event-template/cdn-CdnDomainStarted.json'))
                targetFile = 'cdn-CdnDomainStarted.json'
                await fse.writeFileSync(path.join('./event-template/', targetFile), templateData);
                break;
            case '5':
                templateData = await fse.readFileSync(path.join(__dirname, '../', 'event-template/cdn-CdnDomainStarted.json'))
                targetFile = 'cdn-CdnDomainStopped.json'
                await fse.writeFileSync(path.join('./event-template/', targetFile), templateData);
                break;
            case '6':
                templateData = await fse.readFileSync(path.join(__dirname, '../', 'event-template/cdn-CdnDomainAdded.json'))
                targetFile = 'cdn-CdnDomainAdded.json'
                await fse.writeFileSync(path.join('./event-template/', targetFile), templateData);
                break;
            case '7':
                templateData = await fse.readFileSync(path.join(__dirname, '../', 'event-template/cdn-CdnDomainAdded.json'))
                targetFile = 'cdn-CdnDomainDeleted.json'
                await fse.writeFileSync(path.join('./event-template/', targetFile), templateData);
                break;
            default:
                break;
        }

        logger.success(`

      CDN event template created successfully.
      
      👓 Event Template Path: ${path.join('./event-template/', targetFile)}
      
      You could user fc/fc-api component invoke method and specify the event.
      E.g: [s projectName invoke --event-file  ${path.join('./event-template/', targetFile)}]
      
      More information about CDN Trigger: 
        📝 https://help.aliyun.com/document_detail/75121.htm
      
      `)
    }

}
