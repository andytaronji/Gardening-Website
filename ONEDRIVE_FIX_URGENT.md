# URGENT: Stop OneDrive from Syncing Large Folders

## THE PROBLEM
OneDrive is syncing `node_modules` and `.next` folders which are **200-500+ MB**!
OneDrive **DOES NOT respect .gitignore files** - it syncs everything by default.

## IMMEDIATE FIX (Do This NOW):

### Step 1: Pause OneDrive Sync
1. Right-click OneDrive icon in system tray (bottom right corner)
2. Click "Pause syncing" → "24 hours"

### Step 2: Exclude Folders from OneDrive (CRITICAL!)
You have TWO options:

#### Option A: Using OneDrive Settings (RECOMMENDED)
1. Right-click OneDrive icon → "Settings"
2. Go to "Backup" or "Manage Backup" tab
3. Find your project folder and UNCHECK these folders:
   - `node_modules`
   - `.next`

#### Option B: Using Attrib Command (FASTER)
Open Command Prompt as Administrator and run:
```cmd
cd "C:\Users\aetar\OneDrive\Desktop\Use this one every time Gardening website code\Gardening-Website-main"
attrib +U node_modules /s /d
attrib +U .next /s /d
```

### Step 3: Clean Up What's Already Synced
1. Go to OneDrive web (onedrive.live.com)
2. Navigate to your project folder
3. Delete the `node_modules` and `.next` folders from OneDrive

## WHY THIS HAPPENED
- `node_modules` = All npm packages (200-300 MB)
- `.next` = Next.js build files (50-200 MB)
- These folders regenerate automatically when needed
- They should NEVER be synced to cloud storage

## LONG-TERM SOLUTION
**Move your development projects OUT of OneDrive!**

Recommended location:
- `C:\Dev\` or `C:\Projects\`
- NOT in Documents, Desktop, or any OneDrive folder

## TO MOVE PROJECT SAFELY:
1. Create folder: `C:\Dev\`
2. Copy entire project folder there
3. Delete OneDrive copy AFTER verifying new location works
4. Always work from `C:\Dev\` going forward

## WHAT THESE FOLDERS DO:
- **node_modules**: Contains all npm dependencies - can be recreated with `npm install`
- **.next**: Next.js build output - recreated automatically with `npm run dev` or `npm run build`
- Both are safe to delete - they regenerate automatically!

## IF SYNC ALREADY HAPPENED:
OneDrive may have uploaded 333+ MB. You can:
1. Delete from OneDrive web interface
2. Let it finish then delete (not recommended - waste of bandwidth)
3. Stop OneDrive service entirely until cleaned up

---

**Remember**: Development folders should NEVER be in OneDrive/Dropbox/Google Drive!
