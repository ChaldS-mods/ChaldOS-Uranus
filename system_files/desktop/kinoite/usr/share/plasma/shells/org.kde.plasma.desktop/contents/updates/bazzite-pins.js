const allPanels = panels();
for (let i = 0; i < allPanels.length; ++i) {
    const panel = allPanels[i];
    const widgets = panel.widgets();
    for (let j = 0; j < widgets.length; ++j) {
        const widget = widgets[j];
        // Иконка меню пуска
        if (widget.type === "org.kde.plasma.kickoff" || widget.type === "org.kde.plasma.applicationlauncher") {
            widget.currentConfigGroup = ["General"];
            widget.writeConfig("icon", "/usr/share/pixmaps/system-logo-white.png");
            widget.reloadConfig();
        }
        // Пины на панели задач
        if (widget.type === "org.kde.plasma.icontasks") {
            widget.currentConfigGroup = ["General"];
            const currentLaunchers = widget.readConfig("launchers", "");
            if (!currentLaunchers || currentLaunchers.trim() === "") {
                widget.writeConfig("launchers", [
                    "preferred://browser",
                    "applications:steam.desktop",
                    "applications:net.lutris.Lutris.desktop",
                    "applications:org.kde.konsole.desktop",
                    "applications:io.github.kolunmi.Bazaar.desktop",
                    "applications:io.github.ublue_os.yafti_gtk.desktop",
                    "preferred://filemanager"
                ]);
                widget.reloadConfig();
            }
        }
    }
}
