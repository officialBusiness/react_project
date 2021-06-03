import { Editor } from '@textbus/core';
import { boldTool, cleanTool, colorTool, fontFamilyTool, fontSizeTool, headingTool, historyBackTool, historyForwardTool, imageTool, italicTool, insertParagraphAfterTool, insertParagraphBeforeTool, linkTool, olTool, strikeThroughTool, textAlignTool, textBackgroundTool, textIndentTool, ulTool, underlineTool, unlinkTool, findTool, insertObjectTool, tableTool, Toolbar, TOOLS } from '@textbus/toolbar';
import '@textbus/toolbar/bundles/i18n/zh_CN';
import { fontFamilyFormatter, boldFormatter, linkFormatter, colorFormatter, fontSizeFormatter, italicFormatter, letterSpacingFormatter, lineHeightFormatter, strikeThroughFormatter, subscriptFormatter, superscriptFormatter, textAlignFormatter, textIndentFormatter, underlineFormatter, blockBackgroundColorFormatter, codeFormatter, backgroundColorFormatter, dirFormatter, tdBorderColorFormatter, } from '@textbus/formatters';
import { ListComponent, BlockComponent, PreComponent, AudioComponent, VideoComponent, ImageComponent, TableComponent } from '@textbus/components';
import { DEVICE_OPTIONS, DeviceTogglePlugin } from '@textbus/device-toggle-plugin';
// import { i18n_zh_CN } from '@textbus/textbus/bundles/i18n/_api';
import { AlertComponent, alertComponentExample, BaiduMapComponent, baiduMapComponentExample, COMPONENT_CREATORS, ComponentLibraryPlugin, ImageCardComponent, imageCardComponentExample, JumbotronComponent, jumbotronComponentExample, KatexComponent, katexComponentExample, ProgressComponent, progressComponentExample, StepComponent, stepsComponentExample, TimelineComponent, timelineComponentExample, TodoListComponent, todoListComponentExample, WordExplainComponent, wordExplainComponentExample } from '@textbus/component-library-plugin';
import { ContextmenuPlugin } from '@textbus/contextmenu-plugin';
import { PasteUploadEmitterPlugin } from '@textbus/paste-upload-emitter-plugin';
import { GuardEndBlockPlugin } from '@textbus/guard-end-block-plugin';
import { OutlinesPlugin } from '@textbus/outlines-plugin';
import { FullScreenPlugin } from '@textbus/full-screen-plugin';
import { ImageAndVideoDragResizePlugin } from '@textbus/image-and-video-drag-resize-plugin';
import { LinkJumpTipPlugin } from '@textbus/link-jump-tip-plugin';
import { TableEditEnhancePlugin } from '@textbus/table-edit-enhance-plugin';
import { SourcecodeModePlugin } from '@textbus/sourcecode-mode-plugin';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

export var defaultTools = [
    [historyBackTool, historyForwardTool],
    [insertObjectTool],
    [headingTool],
    [boldTool, italicTool, strikeThroughTool, underlineTool],
    [olTool, ulTool],
    [fontSizeTool, textIndentTool],
    [colorTool, textBackgroundTool],
    [insertParagraphBeforeTool, insertParagraphAfterTool],
    [fontFamilyTool],
    [linkTool, unlinkTool],
    [imageTool],
    [textAlignTool],
    [tableTool],
    [findTool],
    [cleanTool]
];
export var defaultDeviceOptions = [{
        label: 'PC',
        value: '100%',
        default: true,
    }, {
        label: 'iPhone5/SE',
        value: '320px'
    }, {
        label: 'iPhone6/7/8/X',
        value: '375px'
    }, {
        label: 'iPhone6/7/8 Plus',
        value: '414px'
    }, {
        label: 'iPad',
        value: '768px'
    }, {
        label: 'iPad Pro',
        value: '1024px'
    }, {
        label: 'A4',
        value: '842px'
    }];
export var defaultComponentLibrary = [
    imageCardComponentExample,
    todoListComponentExample,
    baiduMapComponentExample,
    jumbotronComponentExample,
    wordExplainComponentExample,
    katexComponentExample,
    timelineComponentExample,
    stepsComponentExample,
    progressComponentExample,
    alertComponentExample,
];
export var defaultOptions = {
    theme: 'dark',// 可选 'dark' | 'mac-os' | 'mac-os-dark'，不传即为默认样式
    historyStackSize: 5,
    editingStyleSheets: [
        "[style*=color]:not([style*=background-color])\n   a {color: inherit;}",
        "a {text-decoration: underline; color: #449fdb; cursor: text;}"
    ],
    // i18n: i18n_zh_CN,
    components: [
        AlertComponent,
        KatexComponent,
        StepComponent,
        ProgressComponent,
        TimelineComponent,
        WordExplainComponent,
        JumbotronComponent,
        BaiduMapComponent,
        TodoListComponent,
        ImageCardComponent,
        ListComponent,
        BlockComponent,
        PreComponent,
        AudioComponent,
        VideoComponent,
        ImageComponent,
        TableComponent
    ],
    formatters: [
        fontFamilyFormatter,
        boldFormatter,
        linkFormatter,
        backgroundColorFormatter,
        blockBackgroundColorFormatter,
        codeFormatter,
        colorFormatter,
        fontSizeFormatter,
        italicFormatter,
        letterSpacingFormatter,
        lineHeightFormatter,
        strikeThroughFormatter,
        subscriptFormatter,
        superscriptFormatter,
        textAlignFormatter,
        textIndentFormatter,
        underlineFormatter,
        dirFormatter,
        tdBorderColorFormatter,
    ],
    providers: [{
            provide: TOOLS,
            useValue: defaultTools
        }, {
            provide: DEVICE_OPTIONS,
            useValue: defaultDeviceOptions
        }, {
            provide: COMPONENT_CREATORS,
            useValue: defaultComponentLibrary
        }],
    plugins: [
        Toolbar,
        ComponentLibraryPlugin,
        ContextmenuPlugin,
        PasteUploadEmitterPlugin,
        GuardEndBlockPlugin,
        OutlinesPlugin,
        FullScreenPlugin,
        DeviceTogglePlugin,
        ImageAndVideoDragResizePlugin,
        LinkJumpTipPlugin,
        TableEditEnhancePlugin,
        SourcecodeModePlugin,
    ]
};
BlockComponent.cleanedFormatters.push(linkFormatter);
export default function createEditor(selector, options) {
    // console.log('createEditor')
    if (options === void 0) { options = {}; }
    return new Editor(selector, __assign(__assign({}, defaultOptions), options));
}
//# sourceMappingURL=create.js.map