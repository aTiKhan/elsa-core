/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ActivityModel, WorkflowDefinition, WorkflowModel } from "./models";
export namespace Components {
    interface ElsaActivityEditorModal {
    }
    interface ElsaActivityPickerModal {
    }
    interface ElsaDesignerTree {
        "model": WorkflowModel;
    }
    interface ElsaDesignerTreeActivity {
        "activityModel": ActivityModel;
        "icon": string;
    }
    interface ElsaModalDialog {
        "hide": (animate: boolean) => Promise<void>;
        "show": (animate: boolean) => Promise<void>;
    }
    interface ElsaWorkflowEditor {
        "serverUrl": string;
        "workflowDefinitionId": string;
    }
    interface ElsaWorkflowPublishButton {
    }
    interface ElsaWorkflowSettingsModal {
        "workflowDefinition": WorkflowDefinition;
    }
}
declare global {
    interface HTMLElsaActivityEditorModalElement extends Components.ElsaActivityEditorModal, HTMLStencilElement {
    }
    var HTMLElsaActivityEditorModalElement: {
        prototype: HTMLElsaActivityEditorModalElement;
        new (): HTMLElsaActivityEditorModalElement;
    };
    interface HTMLElsaActivityPickerModalElement extends Components.ElsaActivityPickerModal, HTMLStencilElement {
    }
    var HTMLElsaActivityPickerModalElement: {
        prototype: HTMLElsaActivityPickerModalElement;
        new (): HTMLElsaActivityPickerModalElement;
    };
    interface HTMLElsaDesignerTreeElement extends Components.ElsaDesignerTree, HTMLStencilElement {
    }
    var HTMLElsaDesignerTreeElement: {
        prototype: HTMLElsaDesignerTreeElement;
        new (): HTMLElsaDesignerTreeElement;
    };
    interface HTMLElsaDesignerTreeActivityElement extends Components.ElsaDesignerTreeActivity, HTMLStencilElement {
    }
    var HTMLElsaDesignerTreeActivityElement: {
        prototype: HTMLElsaDesignerTreeActivityElement;
        new (): HTMLElsaDesignerTreeActivityElement;
    };
    interface HTMLElsaModalDialogElement extends Components.ElsaModalDialog, HTMLStencilElement {
    }
    var HTMLElsaModalDialogElement: {
        prototype: HTMLElsaModalDialogElement;
        new (): HTMLElsaModalDialogElement;
    };
    interface HTMLElsaWorkflowEditorElement extends Components.ElsaWorkflowEditor, HTMLStencilElement {
    }
    var HTMLElsaWorkflowEditorElement: {
        prototype: HTMLElsaWorkflowEditorElement;
        new (): HTMLElsaWorkflowEditorElement;
    };
    interface HTMLElsaWorkflowPublishButtonElement extends Components.ElsaWorkflowPublishButton, HTMLStencilElement {
    }
    var HTMLElsaWorkflowPublishButtonElement: {
        prototype: HTMLElsaWorkflowPublishButtonElement;
        new (): HTMLElsaWorkflowPublishButtonElement;
    };
    interface HTMLElsaWorkflowSettingsModalElement extends Components.ElsaWorkflowSettingsModal, HTMLStencilElement {
    }
    var HTMLElsaWorkflowSettingsModalElement: {
        prototype: HTMLElsaWorkflowSettingsModalElement;
        new (): HTMLElsaWorkflowSettingsModalElement;
    };
    interface HTMLElementTagNameMap {
        "elsa-activity-editor-modal": HTMLElsaActivityEditorModalElement;
        "elsa-activity-picker-modal": HTMLElsaActivityPickerModalElement;
        "elsa-designer-tree": HTMLElsaDesignerTreeElement;
        "elsa-designer-tree-activity": HTMLElsaDesignerTreeActivityElement;
        "elsa-modal-dialog": HTMLElsaModalDialogElement;
        "elsa-workflow-editor": HTMLElsaWorkflowEditorElement;
        "elsa-workflow-publish-button": HTMLElsaWorkflowPublishButtonElement;
        "elsa-workflow-settings-modal": HTMLElsaWorkflowSettingsModalElement;
    }
}
declare namespace LocalJSX {
    interface ElsaActivityEditorModal {
    }
    interface ElsaActivityPickerModal {
    }
    interface ElsaDesignerTree {
        "model"?: WorkflowModel;
        "onWorkflow-changed"?: (event: CustomEvent<WorkflowModel>) => void;
    }
    interface ElsaDesignerTreeActivity {
        "activityModel"?: ActivityModel;
        "icon"?: string;
        "onEdit-activity"?: (event: CustomEvent<ActivityModel>) => void;
        "onRemove-activity"?: (event: CustomEvent<ActivityModel>) => void;
    }
    interface ElsaModalDialog {
    }
    interface ElsaWorkflowEditor {
        "serverUrl"?: string;
        "workflowDefinitionId"?: string;
    }
    interface ElsaWorkflowPublishButton {
        "onPublishClicked"?: (event: CustomEvent<any>) => void;
    }
    interface ElsaWorkflowSettingsModal {
        "workflowDefinition"?: WorkflowDefinition;
    }
    interface IntrinsicElements {
        "elsa-activity-editor-modal": ElsaActivityEditorModal;
        "elsa-activity-picker-modal": ElsaActivityPickerModal;
        "elsa-designer-tree": ElsaDesignerTree;
        "elsa-designer-tree-activity": ElsaDesignerTreeActivity;
        "elsa-modal-dialog": ElsaModalDialog;
        "elsa-workflow-editor": ElsaWorkflowEditor;
        "elsa-workflow-publish-button": ElsaWorkflowPublishButton;
        "elsa-workflow-settings-modal": ElsaWorkflowSettingsModal;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "elsa-activity-editor-modal": LocalJSX.ElsaActivityEditorModal & JSXBase.HTMLAttributes<HTMLElsaActivityEditorModalElement>;
            "elsa-activity-picker-modal": LocalJSX.ElsaActivityPickerModal & JSXBase.HTMLAttributes<HTMLElsaActivityPickerModalElement>;
            "elsa-designer-tree": LocalJSX.ElsaDesignerTree & JSXBase.HTMLAttributes<HTMLElsaDesignerTreeElement>;
            "elsa-designer-tree-activity": LocalJSX.ElsaDesignerTreeActivity & JSXBase.HTMLAttributes<HTMLElsaDesignerTreeActivityElement>;
            "elsa-modal-dialog": LocalJSX.ElsaModalDialog & JSXBase.HTMLAttributes<HTMLElsaModalDialogElement>;
            "elsa-workflow-editor": LocalJSX.ElsaWorkflowEditor & JSXBase.HTMLAttributes<HTMLElsaWorkflowEditorElement>;
            "elsa-workflow-publish-button": LocalJSX.ElsaWorkflowPublishButton & JSXBase.HTMLAttributes<HTMLElsaWorkflowPublishButtonElement>;
            "elsa-workflow-settings-modal": LocalJSX.ElsaWorkflowSettingsModal & JSXBase.HTMLAttributes<HTMLElsaWorkflowSettingsModalElement>;
        }
    }
}