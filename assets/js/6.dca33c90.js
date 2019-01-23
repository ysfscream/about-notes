(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{208:function(e,v,_){"use strict";_.r(v);var a=_(0),i=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("div",{staticClass:"content"},[_("h1",{attrs:{id:"mac-键"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mac-键","aria-hidden":"true"}},[e._v("#")]),e._v(" Mac  键")]),e._v(" "),_("blockquote",[_("p",[e._v("Mac 键盘值 快捷键各种")])]),e._v(" "),_("p",[_("img",{attrs:{src:"/media/15117927195295.jpg",alt:""}})]),e._v(" "),_("p",[_("img",{attrs:{src:"/media/15117941521058.jpg",alt:""}})]),e._v(" "),_("p",[_("img",{attrs:{src:"/media/15117941671914.jpg",alt:""}})]),e._v(" "),_("p",[_("img",{attrs:{src:"/media/15117941786881.jpg",alt:""}})]),e._v(" "),_("p",[_("img",{attrs:{src:"/media/15117942108353.jpg",alt:""}})]),e._v(" "),_("h2",{attrs:{id:"终端快捷键"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#终端快捷键","aria-hidden":"true"}},[e._v("#")]),e._v(" 终端快捷键")]),e._v(" "),_("p",[e._v("基本命令\n1、列出文件\nls 参数 目录名        例: 看看驱动目录下有什么:ls /System/Library/Extensions\n参数 -w 显示中文，-l 详细信息， -a 包括隐藏文件\n2、转换目录")]),e._v(" "),_("p",[e._v("cd    例：想到驱动目录下溜达一圈   cd /System/Library/Extensions")]),e._v(" "),_("p",[e._v("3、建立新目录\nmkdir 目录名     例：在驱动目录下建一个备份目录 backup     mkdir /System/Library/Extensions/backup\n在桌面上建一个备份目录 backup    mkdir /User/用户名/Desktop/backup")]),e._v(" "),_("p",[e._v("4、拷贝文件\ncp 参数 源文件 目标文件    例：想把桌面的Natit.kext 拷贝到驱动目录中  cp -R /User/用户名/Desktop/Natit.kext /System/Library/Extensions\n参数R表示对目录进行递归操作，kext在图形界面下看起来是个文件，实际上是个文件夹。\n把驱动目录下的所有文件备份到桌面backup\ncp -R /System/Library/Extensions/* /User/用户名/Desktop/backup")]),e._v(" "),_("p",[e._v("5、删除文件\nrm 参数 文件   例：想删除驱动的缓存  rm -rf /System/Library/Extensions.kextcache     rm -rf /System/Library/Extensions.mkext\n参数－rf 表示递归和强制，千万要小心使用，如果执行了 rm -rf / 你的系统就全没了")]),e._v(" "),_("p",[e._v("6、移动文件\nmv 文件   例：想把AppleHDA.Kext 移到桌面    mv /System/Library/Extensions/AppleHDA.kext /User/用户名/Desktop\n想把AppleHDA.Kext 移到备份目录中   mv /System/Library/Extensions/AppleHDA.kext /System/Library/Extensions/backup")]),e._v(" "),_("p",[e._v("7、文本编辑\nnano 文件名   例：编辑natit Info.plist     nano /System/Library/Extensions/Natit.kext/Info.plist")]),e._v(" "),_("p",[e._v("目录操作")]),e._v(" "),_("p",[e._v("命令名                       功能描述                                             使用举例")]),e._v(" "),_("p",[e._v("mkdir                        创建一个目录                                       mkdir dirname")]),e._v(" "),_("p",[e._v("rmdir                         删除一个目录                                       rmdir dirname")]),e._v(" "),_("p",[e._v("mvdir                        移动或重命名一个目录                         mvdir dir1 dir2")]),e._v(" "),_("p",[e._v("cd                             改变当前目录                                       cd dirname")]),e._v(" "),_("p",[e._v("pwd                          显示当前目录的路径名                          pwd")]),e._v(" "),_("p",[e._v("ls                              显示当前目录的内容                             ls -la")]),e._v(" "),_("p",[e._v("文件操作")]),e._v(" "),_("p",[e._v("命令名                                 功能描述                                  使用举例")]),e._v(" "),_("p",[e._v("cat                                      显示或连接文件                       cat filename")]),e._v(" "),_("p",[e._v("od                                       显示非文本文件的内容            od -c filename")]),e._v(" "),_("p",[e._v("cp                                      复制文件或目录                        cp file1 file2")]),e._v(" "),_("p",[e._v("rm                                     删除文件或目录                         rm filename")]),e._v(" "),_("p",[e._v("mv                                    改变文件名或所在目录               mv file1 file2")]),e._v(" "),_("p",[e._v('find                                  使用匹配表达式查找文件             find . -name "*.c" -print')]),e._v(" "),_("p",[e._v("file                                  显示文件类型                                file filename")]),e._v(" "),_("p",[e._v("选择操作")]),e._v(" "),_("p",[e._v("命令名                             功能描述                                       使用举例")]),e._v(" "),_("p",[e._v("head                              显示文件的最初几行                       head -20 filename")]),e._v(" "),_("p",[e._v("tail                                 显示文件的最后几行                       tail -15 filename")]),e._v(" "),_("p",[e._v("cut                                显示文件每行中的某些域                 cut -f1,7 -d: /etc/passwd")]),e._v(" "),_("p",[e._v("colrm                            从标准输入中删除若干列                  colrm 8 20 file2")]),e._v(" "),_("p",[e._v("diff                                比较并显示两个文件的差异                diff file1 file2")]),e._v(" "),_("p",[e._v("sort                             排序或归并文件                                      sort -d -f -u file1")]),e._v(" "),_("p",[e._v("uniq                           去掉文件中的重复行                                  uniq file1 file2")]),e._v(" "),_("p",[e._v("comm                        显示两有序文件的公共和非公共行              comm file1 file2")]),e._v(" "),_("p",[e._v("wc                            统计文件的字符数、词数和行数                    wc filename")]),e._v(" "),_("p",[e._v("nl                             给文件加上行号                                         nl file1 >file2")]),e._v(" "),_("p",[e._v("进程操作")]),e._v(" "),_("p",[e._v("命令名                     功能描述                                                 使用举例")]),e._v(" "),_("p",[e._v("ps                           显示进程当前状态                                     ps u")]),e._v(" "),_("p",[e._v("kill                         终止进程                                                     kill -9 30142")]),e._v(" "),_("p",[e._v("时间操作")]),e._v(" "),_("p",[e._v("命令名                           功能描述                                            使用举例")]),e._v(" "),_("p",[e._v("date                    显示系统的当前日期和时间                           date")]),e._v(" "),_("p",[e._v("cal                                   显示日历                                       cal 8 1996")]),e._v(" "),_("p",[e._v("time                         统计程序的执行时间                            time a.out")]),e._v(" "),_("p",[e._v("网络与通信操作")]),e._v(" "),_("p",[e._v("命令名                                功能描述                                       使用举例")]),e._v(" "),_("p",[e._v("telnet                                  远程登录                                 telnet hpc.sp.net.edu.cn")]),e._v(" "),_("p",[e._v("rlogin                                 远程登录                                 rlogin hostname -l username")]),e._v(" "),_("p",[e._v("rsh                       在远程主机执行指定命令                             rsh f01n03 date")]),e._v(" "),_("p",[e._v("ftp                   在本地主机与远程主机之间传输文件                ftpftp.sp.net.edu.cn")]),e._v(" "),_("p",[e._v("rcp                 在本地主机与远程主机 之间复制文件               rcp file1 host1:file2")]),e._v(" "),_("p",[e._v("ping                   给一个网络主机发送 回应请求                   ping hpc.sp.net.edu.cn")]),e._v(" "),_("p",[e._v("mail                          阅读和发送电子邮件                                          mail")]),e._v(" "),_("p",[e._v("write                      给另一用户发送报文                                  write username pts/1")]),e._v(" "),_("p",[e._v("mesg                    允许或拒绝接收报文                                                 mesg n")]),e._v(" "),_("p",[e._v("Korn Shell 命令")]),e._v(" "),_("p",[e._v("命令名                                 功能描述                                        使用举例")]),e._v(" "),_("p",[e._v("history               列出最近执行过的 几条命令及编号                       history")]),e._v(" "),_("p",[e._v("r                         重复执行最近执行过的 某条命令                            r -2")]),e._v(" "),_("p",[e._v("alias                            给某个命令定义别名                                  alias del=rm -i")]),e._v(" "),_("p",[e._v("unalias                     取消对某个别名的定义                                  unalias del")]),e._v(" "),_("p",[e._v("其它命令")]),e._v(" "),_("p",[e._v("命令名                                  功能描述                                         使用举例")]),e._v(" "),_("p",[e._v("uname                     显示操作系统的有关信息                              uname -a")]),e._v(" "),_("p",[e._v("clear                       清除屏幕或窗口内容                                        clear")]),e._v(" "),_("p",[e._v("env                        显示当前所有设置过的环境变量                         env")]),e._v(" "),_("p",[e._v("who                       列出当前登录的所有用户                                    who")]),e._v(" "),_("p",[e._v("whoami                  显示当前正进行操作的用户名                              whoami")]),e._v(" "),_("p",[e._v("tty                         显示终端或伪终端的名称                                         tty")]),e._v(" "),_("p",[e._v("stty                         显示或重置控制键定义                                        stty -a")]),e._v(" "),_("p",[e._v("du                                  查询磁盘使用情况                         du -k subdir\ndf /tmp                          显示文件系统的总空间和可用空间")]),e._v(" "),_("p",[e._v("w                                  显示当前系统活动的总信息")]),e._v(" "),_("p",[e._v("Mac OS X 终端命令开启功能\n1.Lion下显示资源库\n方法一：\n显示\n在“终端”中输入下面的命令：\nchflags nohidden ~/Library/")]),e._v(" "),_("p",[e._v("隐藏\n在“终端”中输入下面的命令：\nchflags hidden ~/Library/")]),e._v(" "),_("p",[e._v("方法二：\n打开Finder，菜单中选择前往按住option键就会显示资源库项(每次打开都需要重复操作一次)。")]),e._v(" "),_("p",[e._v("2.Finder显示隐藏文件\n显示隐藏文件\n在“终端”中输入下面的命令：\ndefaults write com.apple.finder AppleShowAllFiles -bool true\nkillall Finder")]),e._v(" "),_("p",[e._v("恢复隐藏文件\n在“终端”中输入下面的命令：\ndefaults write com.apple.finder AppleShowAllFiles -bool false\nkillall Finder")]),e._v(" "),_("p",[e._v("3.Xcode卸载\n在“终端”中输入下面的命令：\nsudo /Library/uninstall-devtools –mode=all")]),e._v(" "),_("p",[e._v("为实际安装的目录，默认情况下Xcode安装在/Developer目录下，即可执行\nsudo /Developer/Library/uninstall-devtools –mode=all")]),e._v(" "),_("p",[e._v("4.在Finder标题栏显示完整路径\n在“终端”中输入下面的命令：\ndefaults write com.apple.finder _FXShowPosixPathInTitle -bool YES\nkillall Finder")]),e._v(" "),_("p",[e._v("5.去掉窗口截屏的阴影\n对窗口进行截屏的时候(Command-Shift-4, 空格)，得到的图片周围会自动被加上一圈阴影。\n如果你不喜欢这个阴影的效果，可以把它关掉。\n在“终端”中输入下面的命令：\ndefaults write com.apple.screencapture disable-shadow -bool true\nkillall SystemUIServer")]),e._v(" "),_("p",[e._v("6.强制Safari在新标签中打开网页\nSafari是默认支持标签浏览的。但是，我们在页面上点击链接或者在其他应用程序中点击链接的时候，\nSafari往往是打开了一个新的窗口，导致页面上的Safari窗口过多，不好管理。通过下面这个小窍门，\n我们可以让Safari默认是在一个新标签中打开网页。\n在“终端”中输入下面的命令：\ndefaults write com.apple.Safari TargetedClicksCreateTabs -bool true")]),e._v(" "),_("p",[e._v("7.改变截屏图片的保存位置\nMac OS提供了非常方便的截屏快捷键，可以让我们非常快速的对整个屏幕、部分屏幕或者应用程序窗口进行截屏。不过，这个截屏功能有一个不足之处，就是只能将截 屏图片保存到桌面。如果我们截取的图片特别多，就会让桌面显得特别凌乱。那有没有办法来修改截屏图片的默认保存位置呢？有。方法非常简单，只要在“终端” 中输入下面的命令就可以了。\ndefaults write com.apple.screencapture location 存放位置\nkillall SystemUIServer")]),e._v(" "),_("p",[e._v("在输入命令的时候，将“存放位置”替换成真正的文件夹就可以了。例如，你希望存放到自己用户目录的Screenshots文件夹下，就输入\ndefaults write com.apple.screencapture location ~/Screenshots")]),e._v(" "),_("p",[e._v("Mac锁屏设置快捷键\n如果用户要离开电脑一段时间，可以选择直接把笔记本直接合上。但是这样原先在跑 的进程就会挂起或者结束，如果正在下载，那么下载就被暂停（有时还不能恢复），如果正在提供网络服务，那么因为网络断了，别人也连不上你的笔记本。锁屏可 以解决这个问题，在Windows下用Win+L快捷键就锁屏了，但Mac OS X下一直没有默认的快捷键。")]),e._v(" "),_("p",[e._v("对于像我一样的新手，不要说设置锁屏快捷键，即便要使用其他锁屏的方法我也要到网上才能找到。其中一种方法是，首先在Finder找到“钥匙串访 问”这个实用工具（具体位置是/Applications/Utilities/Keychain Access.app），然后在“偏好设置”里选择“在菜单栏中显示钥匙串状态”。这时我们发现系统菜单多了一个像锁一样的小图标，只要点击它，就能找到 锁屏。")]),e._v(" "),_("p",[e._v("上述的方法实现了锁屏，但还没能达到快捷键控制锁屏的目标。虽然如此，但它的效果给我们一个锁屏思路。首先，我们要求屏幕保护程序在恢复时必须输入密码，然后锁屏问题就变成启动屏幕保护程序的问题了。Lock the screen via a keyboard shortcut这篇文章叙述了具体的实施方法。")]),e._v(" "),_("p",[e._v("第一步，找到“系统偏好设置”下的“安全性与隐私”，在“通用”页里勾上“进入睡眠或开始屏幕保护程序后立即要求输入密码”。")]),e._v(" "),_("p",[e._v("第二步，要用快捷键启动屏幕保护程序，相对复杂一点。在“应用程序”里找到“Automator”。新建一个服务，在“操作”下的“实用工具”里找 到“启动屏幕保护程序”，并把此操作拖动到右边，并且选择“没有输入”和位于“任何应用程序”，如下图所示。然后把服务保存为自己定义的名字。")]),e._v(" "),_("p",[e._v("最后，在“系统偏好设置”里找到“键盘”，然后为刚才定义的服务配置快捷键，我设成了Command+Control+L。")])])}],!1,null,null,null);i.options.__file="Mac  键.md";v.default=i.exports}}]);