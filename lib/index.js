"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = __importDefault(require("./common/base"));
var logger_1 = __importDefault(require("./common/logger"));
var fse = require('fs-extra');
var path_1 = __importDefault(require("path"));
var inquirer_1 = __importDefault(require("inquirer"));
logger_1.default.setContent("FC-EVENT");
var ComponentDemo = /** @class */ (function (_super) {
    __extends(ComponentDemo, _super);
    function ComponentDemo(props) {
        return _super.call(this, props) || this;
    }
    /**
     * OSS 触发器事件
     * @param inputs
     * @returns
     */
    ComponentDemo.prototype.oss = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var templateData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fse.mkdirs('./event-template/')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, fse.readFileSync(path_1.default.join(__dirname, '../', 'event-template/oss.json'))];
                    case 2:
                        templateData = _a.sent();
                        return [4 /*yield*/, fse.writeFileSync(path_1.default.join('./event-template/', 'oss-event.json'), templateData)];
                    case 3:
                        _a.sent();
                        logger_1.default.success("\n\n      OSS event template created successfully.\n      \n      \uD83D\uDC53 Event Template Path: " + path_1.default.join('./event-template/', 'oss-event.json') + "\n      \n      You could user fc/fc-api component invoke method and specify the event.\n      E.g: [s projectName invoke --event-file  " + path_1.default.join('./event-template/', 'oss-event.json') + "]\n      \n      More information about OSS Trigger: \n        \uD83D\uDCDD https://help.aliyun.com/document_detail/74763.htm\n      \n      ");
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * SLS 触发器事件
     * @param inputs
     * @returns
     */
    ComponentDemo.prototype.sls = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var templateData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fse.mkdirs('./event-template/')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, fse.readFileSync(path_1.default.join(__dirname, '../', 'event-template/sls.json'))];
                    case 2:
                        templateData = _a.sent();
                        return [4 /*yield*/, fse.writeFileSync(path_1.default.join('./event-template/', 'sls-event.json'), templateData)];
                    case 3:
                        _a.sent();
                        logger_1.default.success("\n\n      SLS event template created successfully.\n      \n      \uD83D\uDC53 Event Template Path: " + path_1.default.join('./event-template/', 'sls-event.json') + "\n      \n      You could user fc/fc-api component invoke method and specify the event.\n      E.g: [s projectName invoke --event-file  " + path_1.default.join('./event-template/', 'sls-event.json') + "]\n      \n      More information about SLS Trigger: \n        \uD83D\uDCDD https://help.aliyun.com/document_detail/84092.htm\n      \n      ");
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * TableStore 触发器事件
     * @param inputs
     * @returns
     */
    ComponentDemo.prototype.tablestore = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var templateData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fse.mkdirs('./event-template/')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, fse.readFileSync(path_1.default.join(__dirname, '../', 'event-template/tablestore.json'))];
                    case 2:
                        templateData = _a.sent();
                        return [4 /*yield*/, fse.writeFileSync(path_1.default.join('./event-template/', 'tablestore-event.json'), templateData)];
                    case 3:
                        _a.sent();
                        logger_1.default.success("\n\n      TableStore event template created successfully.\n      \n      \uD83D\uDC53 Event Template Path: " + path_1.default.join('./event-template/', 'tablestore-event.json') + "\n      \n      You could user fc/fc-api component invoke method and specify the event.\n      E.g: [s projectName invoke --event-file  " + path_1.default.join('./event-template/', 'tablestore-event.json') + "]\n      \n      More information about TableStore Trigger: \n        \uD83D\uDCDD https://help.aliyun.com/document_detail/169673.htm\n      \n      ");
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * MNS 触发器事件
     * @param inputs
     * @returns
     */
    ComponentDemo.prototype.mns = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var cicdPlatform, templateData, targetFile, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, fse.mkdirs('./event-template/')];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, inquirer_1.default.prompt([{
                                    type: 'list',
                                    name: 'platform',
                                    'message': '请选择MNS事件类型',
                                    choices: [
                                        { name: 'event格式设置为STREAM， 消息中不含消息属性（MessageAttributes）时', value: '0' },
                                        { name: 'event格式设置为STREAM， 消息中含有消息属性（MessageAttributes）时', value: '1' },
                                        { name: 'event格式设置为JSON， 消息中不含消息属性（MessageAttributes）时', value: '2' },
                                        { name: 'event格式设置为JSON， 消息中含有消息属性（MessageAttributes）时', value: '3' },
                                    ]
                                }])];
                    case 2:
                        cicdPlatform = _b.sent();
                        _a = cicdPlatform.platform;
                        switch (_a) {
                            case '0': return [3 /*break*/, 3];
                            case '1': return [3 /*break*/, 5];
                            case '2': return [3 /*break*/, 8];
                            case '3': return [3 /*break*/, 11];
                        }
                        return [3 /*break*/, 14];
                    case 3:
                        templateData = 'hello topic';
                        targetFile = 'mns-stream-without-message-attributes.json';
                        return [4 /*yield*/, fse.writeFileSync(path_1.default.join('./event-template/', targetFile), templateData)];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 15];
                    case 5: return [4 /*yield*/, fse.readFileSync(path_1.default.join(__dirname, '../', 'event-template/mns-stream.json'))];
                    case 6:
                        templateData = _b.sent();
                        targetFile = 'mns-stream-with-message-attributes.json';
                        return [4 /*yield*/, fse.writeFileSync(path_1.default.join('./event-template/', targetFile), templateData)];
                    case 7:
                        _b.sent();
                        return [3 /*break*/, 15];
                    case 8: return [4 /*yield*/, fse.readFileSync(path_1.default.join(__dirname, '../', 'event-template/mns-without-MessageAttributes.json'))];
                    case 9:
                        templateData = _b.sent();
                        targetFile = 'mns-json-without-message-attributes.json';
                        return [4 /*yield*/, fse.writeFileSync(path_1.default.join('./event-template/', targetFile), templateData)];
                    case 10:
                        _b.sent();
                        return [3 /*break*/, 15];
                    case 11: return [4 /*yield*/, fse.readFileSync(path_1.default.join(__dirname, '../', 'event-template/mns-with-MessageAttributes.json.json'))];
                    case 12:
                        templateData = _b.sent();
                        targetFile = 'mns-json-with-message-attributes.json';
                        return [4 /*yield*/, fse.writeFileSync(path_1.default.join('./event-template/', targetFile), templateData)];
                    case 13:
                        _b.sent();
                        return [3 /*break*/, 15];
                    case 14: return [3 /*break*/, 15];
                    case 15:
                        logger_1.default.success("\n\n      MNS event template created successfully.\n      \n      \uD83D\uDC53 Event Template Path: " + path_1.default.join('./event-template/', targetFile) + "\n      \n      You could user fc/fc-api component invoke method and specify the event.\n      E.g: [s projectName invoke --event-file  " + path_1.default.join('./event-template/', targetFile) + "]\n      \n      More information about MNS Trigger: \n        \uD83D\uDCDD https://help.aliyun.com/document_detail/97022.htm\n      \n      ");
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * CDN 触发器事件
     * @param inputs
     * @returns
     */
    ComponentDemo.prototype.cdn = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var cicdPlatform, templateData, targetFile, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, fse.mkdirs('./event-template/')];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, inquirer_1.default.prompt([{
                                    type: 'list',
                                    name: 'platform',
                                    'message': '请选择MNS事件类型',
                                    choices: [
                                        { name: 'LogFileCreated事件', value: '0' },
                                        { name: 'CachedObjectsRefreshed事件', value: '1' },
                                        { name: 'CachedObjectsPushed事件', value: '2' },
                                        { name: 'CachedObjectsBlocked事件', value: '3' },
                                        { name: 'CdnDomainStarted事件', value: '4' },
                                        { name: 'CdnDomainStopped事件', value: '5' },
                                        { name: 'CdnDomainAdded事件', value: '6' },
                                        { name: 'CdnDomainDeleted事件', value: '7' }
                                    ]
                                }])];
                    case 2:
                        cicdPlatform = _b.sent();
                        _a = cicdPlatform.platform;
                        switch (_a) {
                            case '0': return [3 /*break*/, 3];
                            case '1': return [3 /*break*/, 6];
                            case '2': return [3 /*break*/, 9];
                            case '3': return [3 /*break*/, 12];
                            case '4': return [3 /*break*/, 15];
                            case '5': return [3 /*break*/, 18];
                            case '6': return [3 /*break*/, 21];
                            case '7': return [3 /*break*/, 24];
                        }
                        return [3 /*break*/, 27];
                    case 3: return [4 /*yield*/, fse.readFileSync(path_1.default.join(__dirname, '../', 'event-template/cdn-LogFileCreated.json'))];
                    case 4:
                        templateData = _b.sent();
                        targetFile = 'cdn-LogFileCreated.json';
                        return [4 /*yield*/, fse.writeFileSync(path_1.default.join('./event-template/', targetFile), templateData)];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 28];
                    case 6: return [4 /*yield*/, fse.readFileSync(path_1.default.join(__dirname, '../', 'event-template/cdn-CachedObjectsRefreshed.json'))];
                    case 7:
                        templateData = _b.sent();
                        targetFile = 'cdn-CachedObjectsRefreshed.json';
                        return [4 /*yield*/, fse.writeFileSync(path_1.default.join('./event-template/', targetFile), templateData)];
                    case 8:
                        _b.sent();
                        return [3 /*break*/, 28];
                    case 9: return [4 /*yield*/, fse.readFileSync(path_1.default.join(__dirname, '../', 'event-template/cdn-CachedObjectsRefreshed.json'))];
                    case 10:
                        templateData = _b.sent();
                        targetFile = 'cdn-CachedObjectsPushed.json';
                        return [4 /*yield*/, fse.writeFileSync(path_1.default.join('./event-template/', targetFile), templateData)];
                    case 11:
                        _b.sent();
                        return [3 /*break*/, 28];
                    case 12: return [4 /*yield*/, fse.readFileSync(path_1.default.join(__dirname, '../', 'event-template/cdn-CachedObjectsRefreshed.json'))];
                    case 13:
                        templateData = _b.sent();
                        targetFile = 'cdn-CachedObjectsBlocked.json';
                        return [4 /*yield*/, fse.writeFileSync(path_1.default.join('./event-template/', targetFile), templateData)];
                    case 14:
                        _b.sent();
                        return [3 /*break*/, 28];
                    case 15: return [4 /*yield*/, fse.readFileSync(path_1.default.join(__dirname, '../', 'event-template/cdn-CdnDomainStarted.json'))];
                    case 16:
                        templateData = _b.sent();
                        targetFile = 'cdn-CdnDomainStarted.json';
                        return [4 /*yield*/, fse.writeFileSync(path_1.default.join('./event-template/', targetFile), templateData)];
                    case 17:
                        _b.sent();
                        return [3 /*break*/, 28];
                    case 18: return [4 /*yield*/, fse.readFileSync(path_1.default.join(__dirname, '../', 'event-template/cdn-CdnDomainStarted.json'))];
                    case 19:
                        templateData = _b.sent();
                        targetFile = 'cdn-CdnDomainStopped.json';
                        return [4 /*yield*/, fse.writeFileSync(path_1.default.join('./event-template/', targetFile), templateData)];
                    case 20:
                        _b.sent();
                        return [3 /*break*/, 28];
                    case 21: return [4 /*yield*/, fse.readFileSync(path_1.default.join(__dirname, '../', 'event-template/cdn-CdnDomainAdded.json'))];
                    case 22:
                        templateData = _b.sent();
                        targetFile = 'cdn-CdnDomainAdded.json';
                        return [4 /*yield*/, fse.writeFileSync(path_1.default.join('./event-template/', targetFile), templateData)];
                    case 23:
                        _b.sent();
                        return [3 /*break*/, 28];
                    case 24: return [4 /*yield*/, fse.readFileSync(path_1.default.join(__dirname, '../', 'event-template/cdn-CdnDomainAdded.json'))];
                    case 25:
                        templateData = _b.sent();
                        targetFile = 'cdn-CdnDomainDeleted.json';
                        return [4 /*yield*/, fse.writeFileSync(path_1.default.join('./event-template/', targetFile), templateData)];
                    case 26:
                        _b.sent();
                        return [3 /*break*/, 28];
                    case 27: return [3 /*break*/, 28];
                    case 28:
                        logger_1.default.success("\n\n      CDN event template created successfully.\n      \n      \uD83D\uDC53 Event Template Path: " + path_1.default.join('./event-template/', targetFile) + "\n      \n      You could user fc/fc-api component invoke method and specify the event.\n      E.g: [s projectName invoke --event-file  " + path_1.default.join('./event-template/', targetFile) + "]\n      \n      More information about CDN Trigger: \n        \uD83D\uDCDD https://help.aliyun.com/document_detail/75121.htm\n      \n      ");
                        return [2 /*return*/];
                }
            });
        });
    };
    return ComponentDemo;
}(base_1.default));
exports.default = ComponentDemo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQTBDO0FBQzFDLDJEQUFxQztBQUVyQyxJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDaEMsOENBQXdCO0FBQ3hCLHNEQUFnQztBQUdoQyxnQkFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUM3QjtJQUEyQyxpQ0FBYTtJQUNwRCx1QkFBWSxLQUFLO2VBQ2Isa0JBQU0sS0FBSyxDQUFDO0lBRWhCLENBQUM7SUFFRDs7OztPQUlHO0lBQ1UsMkJBQUcsR0FBaEIsVUFBaUIsTUFBa0I7Ozs7OzRCQUMvQixxQkFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEVBQUE7O3dCQUFyQyxTQUFxQyxDQUFDO3dCQUNqQixxQkFBTSxHQUFHLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSx5QkFBeUIsQ0FBQyxDQUFDLEVBQUE7O3dCQUE3RixZQUFZLEdBQUcsU0FBOEU7d0JBQ25HLHFCQUFNLEdBQUcsQ0FBQyxhQUFhLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLFlBQVksQ0FBQyxFQUFBOzt3QkFBdkYsU0FBdUYsQ0FBQzt3QkFDeEYsZ0JBQU0sQ0FBQyxPQUFPLENBQUMseUdBSVMsY0FBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxnQkFBZ0IsQ0FBQyxnSkFHL0IsY0FBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxnQkFBZ0IsQ0FBQyxrSkFLMUYsQ0FBQyxDQUFBOzs7OztLQUNIO0lBRUQ7Ozs7T0FJRztJQUNVLDJCQUFHLEdBQWhCLFVBQWlC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