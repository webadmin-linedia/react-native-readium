/**
 * Creates navigator listeners for handling navigation events
 */
export function createNavigatorListeners(onLocationChangeWithTotalProgression, onPositionChange) {
    return {
        frameLoaded: function (_wnd) {
            // noop
        },
        positionChanged: function (_locator) {
            onLocationChangeWithTotalProgression(_locator);
            if (onPositionChange) {
                onPositionChange(_locator.locations?.position || null);
            }
            window.focus();
        },
        tap: function (_e) {
            return false;
        },
        click: function (_e) {
            return false;
        },
        zoom: function (_scale) {
            // noop
        },
        miscPointer: function (_amount) {
            // noop
        },
        scroll: function (_amount) {
            // noop
        },
        customEvent: function (_key, _data) { },
        handleLocator: function (locator) {
            const href = locator.href;
            if (href.startsWith('http://') ||
                href.startsWith('https://') ||
                href.startsWith('mailto:') ||
                href.startsWith('tel:')) {
                if (confirm(`Open "${href}" ?`))
                    window.open(href, '_blank');
            }
            else {
                console.warn('Unhandled locator', locator);
            }
            return false;
        },
        textSelected: function (_selection) {
            // noop
        },
        contentProtection: function (_type, _data) {
            // noop
        },
        contextMenu: function (_data) {
            // noop
        },
        peripheral: function (_data) {
            // noop
        },
    };
}
