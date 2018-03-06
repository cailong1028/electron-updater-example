;--------------------------------
Unicode true

!define NAME_FULL "全方位掌握 NSIS 的使用"
!define NAME "NSIS"

;--------------------------------

; The name of the installer
Name "electron-updater-example"

; The file to write
OutFile "electron-updater-example.exe"

InstallDir "$PROGRAMFILES\electron-updater-example"

; Registry key to check for directory (so if you install again, it will
; overwrite the old one automatically)
InstallDirRegKey HKLM "Software\electron-updater-example" "Install_Dir"

; Request application privileges for Windows Vista
RequestExecutionLevel admin

ShowInstDetails "show"

AddBrandingImage top 20
AllowRootDirInstall false
AutoCloseWindow false
BGFont font_face 500 500 /STRIKE
;BGGradient topc botc notext
;BrandingText /TRIM CENTER installer_text
BrandingText "branding text"
LicenseData "License.txt"
ComponentText "现在将安装 ${NAME_FULL}到您的计算机：" "请选择安装类型" "或选择您希望安装的组件"

DirText "请选择 ${NAME} 的安装路径：" "选择目录用以安装 ${NAME}：" "浏览..."
CompletedText "完成安装"
;--------------------------------

; Pages

page license
;Page components
Page directory
Page instfiles

UninstPage uninstConfirm
UninstPage instfiles

;--------------------------------

; The stuff to install
Section "one (required)"

  SectionIn RO

  ; Set output path to the installation directory.
  SetOutPath $INSTDIR

  ; Put file there
  File "install.nsi"

  ; Write the installation path into the registry
  WriteRegStr HKLM SOFTWARE\electron-updater-example "Install_Dir" "$INSTDIR"

  ; Write the uninstall keys for Windows
  WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\electron-updater-example" "DisplayName" "electron-updater-example"
  WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\electron-updater-example" "UninstallString" '"$INSTDIR\uninstall.exe"'
  WriteRegDWORD HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\electron-updater-example" "NoModify" 1
  WriteRegDWORD HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\electron-updater-example" "NoRepair" 1
  WriteUninstaller "uninstall.exe"

SectionEnd

; Optional section (can be disabled by the user)
Section "Start Menu Shortcuts"

  CreateDirectory "$SMPROGRAMS\electron-updater-example"
  CreateShortCut "$SMPROGRAMS\electron-updater-example\Uninstall.lnk" "$INSTDIR\uninstall.exe" "" "$INSTDIR\uninstall.exe" 0
  CreateShortCut "$SMPROGRAMS\electron-updater-example\electron-updater-example (MakeNSISW).lnk" "$INSTDIR\install.nsi" "" "$INSTDIR\install.nsi" 0

SectionEnd

;--------------------------------

; Uninstaller

Section "Uninstall"

  ; Remove registry keys
  DeleteRegKey HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\electron-updater-example"
  DeleteRegKey HKLM SOFTWARE\electron-updater-example

  ; Remove files and uninstaller
  ;Delete $INSTDIR\install.nsi
  ;Delete $INSTDIR\uninstall.exe
  Delete $INSTDIR\*

  ; Remove shortcuts, if any
  Delete "$SMPROGRAMS\electron-updater-example\*.*"

  ; Remove directories used
  RMDir "$SMPROGRAMS\electron-updater-example"
  RMDir "$INSTDIR"

SectionEnd
