import type { LucideIcon } from 'lucide-react';
import { LayoutDashboard, UserRound, Palette, Languages, PanelsTopLeft, Bell, ShieldCheck, Laptop, Link2, Users, BrainCircuit, HardDrive, RefreshCw, Plug, Gauge, CircleHelp } from 'lucide-react';
export type ModuleItem={id:string,title:string,en:string,desc:string,icon:LucideIcon,group:string};
export const modules:ModuleItem[]=[
{id:'account',title:'الحساب والملف الشخصي',en:'Account & Profile',desc:'إدارة بيانات الملف الشخصي وأمان الحساب',icon:UserRound,group:'personal'},
{id:'appearance',title:'المظهر والتخصيص',en:'Appearance',desc:'الثيمات والألوان والخلفيات والحركة',icon:Palette,group:'personal'},
{id:'locale',title:'اللغة والمنطقة',en:'Language & Region',desc:'اللغة والوقت والتنسيقات الإقليمية',icon:Languages,group:'personal'},
{id:'navigation',title:'إدارة واجهة الموقع',en:'Interface & Navigation',desc:'الأقسام والقائمة الرئيسية والودجات',icon:PanelsTopLeft,group:'experience'},
{id:'notifications',title:'الإشعارات',en:'Notifications',desc:'قنوات الإشعارات والفئات وأوقات الهدوء',icon:Bell,group:'experience'},
{id:'privacy',title:'الخصوصية والأمان',en:'Privacy & Security',desc:'الحماية والجلسات والبيانات الحساسة',icon:ShieldCheck,group:'security'},
{id:'devices',title:'الأجهزة والجلسات',en:'Devices & Sessions',desc:'الأجهزة النشطة ومراجعة الجلسات',icon:Laptop,group:'security'},
{id:'connected',title:'الحسابات المرتبطة',en:'Connected Accounts',desc:'إدارة موفري الخدمات والحسابات الخارجية',icon:Link2,group:'connections'},
{id:'users',title:'المستخدمون والصلاحيات',en:'Users & Permissions',desc:'الأدوار والدعوات ونطاقات الوصول',icon:Users,group:'security'},
{id:'ai',title:'الذكاء الاصطناعي',en:'AI Assistant',desc:'سلوك المساعد والذاكرة وصلاحيات الوصول',icon:BrainCircuit,group:'intelligence'},
{id:'storage',title:'التخزين والملفات',en:'Storage & Files',desc:'المساحة والملفات والتنظيف',icon:HardDrive,group:'system'},
{id:'backup',title:'النسخ الاحتياطي والمزامنة',en:'Backup & Sync',desc:'النسخ والاستعادة وحالة المزامنة',icon:RefreshCw,group:'system'},
{id:'integrations',title:'التكاملات',en:'Integrations',desc:'الخدمات الخارجية ومفاتيح API وسجل الأخطاء',icon:Plug,group:'connections'},
{id:'performance',title:'النظام والأداء',en:'System & Performance',desc:'الأداء والتخزين المؤقت واستهلاك الموارد',icon:Gauge,group:'system'},
{id:'about',title:'حول التطبيق والدعم',en:'About & Support',desc:'الإصدار والمساعدة والإبلاغ عن المشاكل',icon:CircleHelp,group:'other'}];
