/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as opn from 'opn';
import { window } from 'vscode';

export class GitNotInstalledError extends Error {
    constructor() {
        super();
        this.showInstallPrompt();
    }

    public async showInstallPrompt(): Promise<void> {
        const installString = `Install`;
        const input = await window.showErrorMessage(`Git must be installed to use Local Git Deploy.`, installString);
        if (input === 'Install') {
            opn(`https://git-scm.com/downloads`);
        }
    }
}

export class LocalGitDeployError extends Error {
    public readonly servicePlanSize: string;
    constructor(error: Error, servicePlanSize: string) {
        super();
        this.message = error.message;
        this.servicePlanSize = servicePlanSize;
    }
}
