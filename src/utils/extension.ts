const extensionId = 'dejlpmckdjnjgpnllaeeolbfgjienoce';

export const sendIt = (body: {type: string, data: any}) => {
  chrome.runtime?.sendMessage(extensionId, body);
}