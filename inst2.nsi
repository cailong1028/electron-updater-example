;自定义欢迎页面
Page custom WelcomePage

;初始化必须要调用的组件
Function .onInit
  InitPluginsDir
  ;Call DiskFrameWorkSpaceCheck   ;检测磁盘
  ;Call DefineReadINI  #读取INI文件中的内容
  Call IsProgramRunning   #检测程序是否正在运行
   Call CompareVersion     #检查程序的版本号

  ;显示动态的图片
    File `/oname=$PLUGINSDIR\index.htm` `images\index.htm`
  File `/oname=$PLUGINSDIR\loading_pic1.bmp` `images\loading_pic1.bmp`
    File `/oname=$PLUGINSDIR\loading_pic2.bmp` `images\loading_pic2.bmp`
    File `/oname=$PLUGINSDIR\loading_pic3.bmp` `images\loading_pic3.bmp`
    File `/oname=$PLUGINSDIR\loading_pic4.bmp` `images\loading_pic4.bmp`
  File `/oname=$PLUGINSDIR\license.rtf` `license\license.rtf`
  File `/oname=$PLUGINSDIR\License.html` `images\License.html`
  ;背景图片
  File `/ONAME=$PLUGINSDIR\bg.bmp` `images\bg.bmp`
    ;顶部图片
  File `/ONAME=$PLUGINSDIR\welcome.bmp` `images\welcome.bmp`
  File `/ONAME=$PLUGINSDIR\a.png` `images\a.png`
  ;关闭按钮
  File `/oname=$PLUGINSDIR\btn_close.bmp` `images\btn_close.bmp`
  ;立即安装的图片
  File `/oname=$PLUGINSDIR\btn_install.bmp` `images\btn_install.bmp`
  ;退出的背景图片
  File `/ONAME=$PLUGINSDIR\quit.bmp` `images\quit.bmp`
    ;改变路径的按钮图片
    File `/oname=$PLUGINSDIR\btn_agreement1.bmp` `images\btn_agreement1.bmp`
    File `/oname=$PLUGINSDIR\btn_agreement2.bmp` `images\btn_agreement2.bmp`
    File `/oname=$PLUGINSDIR\checkbox1.bmp` `images\checkbox1.bmp`
    File `/oname=$PLUGINSDIR\checkbox2.bmp` `images\checkbox2.bmp`
    ;安装界面的图片
    File `/oname=$PLUGINSDIR\installation.bmp` `images\installation.bmp`
    File `/oname=$PLUGINSDIR\loading1.bmp` `images\loading1.bmp`
  File `/oname=$PLUGINSDIR\loading2.bmp` `images\loading2.bmp`
  #更改路径的界面
  File `/oname=$PLUGINSDIR\btn_change.bmp` `images\btn_change.bmp`
  #安装完成界面
  File `/oname=$PLUGINSDIR\bg_finish.bmp` `images\bg_finish.bmp`  ;安装完成的背景图片
  File `/oname=$PLUGINSDIR\btn_complete.bmp` `images\btn_complete.bmp`

  SkinBtn::Init "$PLUGINSDIR\btn_install.bmp"
  SkinBtn::Init "$PLUGINSDIR\btn_close.bmp"
  SkinBtn::Init "$PLUGINSDIR\btn_quit.bmp"
  SkinBtn::Init "$PLUGINSDIR\btn_cancel.bmp"
  SkinBtn::Init "$PLUGINSDIR\btn_agreement1.bmp"
  SkinBtn::Init "$PLUGINSDIR\btn_agreement2.bmp"
  SkinBtn::Init "$PLUGINSDIR\checkbox1.bmp"
  SkinBtn::Init "$PLUGINSDIR\checkbox2.bmp"
  SkinBtn::Init "$PLUGINSDIR\btn_change.bmp"
  SkinBtn::Init "$PLUGINSDIR\btn_complete.bmp"

FunctionEnd

;初始化的函数
Function onGUIInit
    ;消除边框
    System::Call `user32::SetWindowLong(i$HWNDPARENT,i${GWL_STYLE},0x9480084C)i.R0`
    ;隐藏一些既有控件
    GetDlgItem $0 $HWNDPARENT 1034
    ShowWindow $0 ${SW_HIDE}
    GetDlgItem $0 $HWNDPARENT 1035
    ShowWindow $0 ${SW_HIDE}
    GetDlgItem $0 $HWNDPARENT 1036
    ShowWindow $0 ${SW_HIDE}
    GetDlgItem $0 $HWNDPARENT 1037
    ShowWindow $0 ${SW_HIDE}
    GetDlgItem $0 $HWNDPARENT 1038
    ShowWindow $0 ${SW_HIDE}
    GetDlgItem $0 $HWNDPARENT 1039
    ShowWindow $0 ${SW_HIDE}
    GetDlgItem $0 $HWNDPARENT 1256
    ShowWindow $0 ${SW_HIDE}
    GetDlgItem $0 $HWNDPARENT 1028
    ShowWindow $0 ${SW_HIDE}
FunctionEnd

;处理无边框移动
Function onGUICallback
  ${If} $MSG = ${WM_LBUTTONDOWN}
    SendMessage $HWNDPARENT ${WM_NCLBUTTONDOWN} ${HTCAPTION} $0
  ${EndIf}
FunctionEnd

Function onWarningGUICallback
  ${If} $MSG = ${WM_LBUTTONDOWN}
    SendMessage $WarningForm ${WM_NCLBUTTONDOWN} ${HTCAPTION} $0
  ${EndIf}
FunctionEnd

;关闭函数
Function SkinBtn_Close
  SkinBtn::Set /IMGID=$PLUGINSDIR\btn_close.bmp $1
FunctionEnd

;安装的函数
Function SkinBtn_Install
  SkinBtn::Set /IMGID=$PLUGINSDIR\btn_install.bmp $1
FunctionEnd

;自定义的欢迎页面 （如果此页面为空，则会调用原来的默认的页面）
Function WelcomePage
    GetDlgItem $0 $HWNDPARENT 1
    ShowWindow $0 ${SW_HIDE}
    GetDlgItem $0 $HWNDPARENT 2
    ShowWindow $0 ${SW_HIDE}
    GetDlgItem $0 $HWNDPARENT 3
    ShowWindow $0 ${SW_HIDE}
    ;初始化的定义一个窗口
  nsDialogs::Create 1044
    Pop $0
    ${If} $0 == error
        Abort
    ${EndIf}
    SetCtlColors $0 ""  transparent ;背景设成透明
    ;加入头文件"nsWindows.nsh"
    ${NSW_SetWindowSize} $HWNDPARENT 508 296 ;改变窗体大小
    ${NSW_SetWindowSize} $0 508 296 ;改变Page大小

    ;关闭按钮
   ${NSD_CreateButton} 490 5 15 15 ""
  Pop $Btn_Close
  StrCpy $1 $Btn_Close
  Call SkinBtn_Close
   GetFunctionAddress $3 onClose
   SkinBtn::onClick $1 $3

   ;立即安装的按钮
    ;${NSD_CreateButton} 240 260 88 25 ""
    ${NSD_CreateButton} 183 225 153 39 ""
  Pop $Btn_Install
  StrCpy $1 $Btn_Install
  Call SkinBtn_Install
  EnableWindow $Btn_Install 1
  ;定义的一个Bool值，用于是否显示
  ;StrCpy $Bool_Install 1
  GetFunctionAddress $3 OnClick_Install
   SkinBtn::onClick $1 $3


  ;右下方更改安装路径的控件使用
  ${NSD_CreateButton} 400 280 95 15 ""
  Pop $Btn_LoadPath
  StrCpy $1 $Btn_LoadPath
  Call SkinBtn_Modify
   GetFunctionAddress $3 OnClick_Modify
   SkinBtn::onClick $1 $3
   ;StrCpy $Bool_License 0 ;初始化值为0

   ;CheckBox选中项
  ${NSD_CreateButton} 23 280 15 15 ""
  Pop $Ck_AgreeLicense
  StrCpy $1 $Ck_AgreeLicense
  Call SkinBtn_Checked
  GetFunctionAddress $3 OnClick_CheckAgreeLicense
    SkinBtn::onClick $1 $3
  StrCpy $Bool_AgreeLicense 1
    ${NSD_CreateLabel} 43 280 100 15 "我已阅读并同意"
    Pop $Lbl_AgreeLicense
    SetCtlColors $Lbl_AgreeLicense ""  transparent ;背景设成透明
    ${NSD_CreateBitmap} 0 0 100% 100% ""
    Pop $BGImage
    ;${NSD_SetImage} $BGImage $PLUGINSDIR\bg.bmp $ImageHandle
    ${NSD_SetImage} $BGImage $PLUGINSDIR\bg.bmp $ImageHandle

    GetFunctionAddress $0 onGUICallback
  WndProc::onCallback $BGImage $0 ;处理无边框窗体移动
  nsDialogs::Show
  ${NSD_FreeImage} $ImageHandle

    ;当加上以下的代码后，背景图片以及界面的上方图片显示出来
    GetFunctionAddress $0 onGUICallback
  WndProc::onCallback $BGImage $0 ;处理无边框窗体移动
  nsDialogs::Show
  ;释放背景图片的语句
  ${NSD_FreeImage} $ImageHandle
FunctionEnd


Section Uninstall
  ;删除任务栏快捷方式
 ExecShell "taskbarunpin" "$DESKTOP\Electron.lnk"
  ;删除桌面的快捷方式
  Delete "$DESKTOP\Electron.lnk"
  Delete "$INSTDIR\uninst.exe"   ; 删除自己
  Delete "$SMPROGRAMS\pkpm\Uninstall.lnk"
  RMDir "$SMPROGRAMS\pkpm"
  ;RMDir "$INSTDIR"
  RMDir /r "$INSTDIR"
  ;DeleteRegKey HKLM "$PRODUCT_UNINST_KEY"
  DeleteRegKey HKLM "${PRODUCT_INSTALL_KEY}"
  SetAutoClose true
SectionEnd