echo "Running executor script..."
# rooting is required to disable / enable apps
#adb -s ${device_serial} root
device_serial=`echo $1 | cut -d "_" -f2`
echo "device_serial=${device_serial}"
# rooting is required to disable / enable apps
#adb -s ${device_serial} root
sleep 5
rundate=`date +'%Y%m%d_%H%M%S'`
SECONDS=0
#ANDROID_BUILD_ID=$1

APP_LIST_FILENAME="app_list"
TEST_DATA_PATH="./test_data"

##### Create Test Report file format with header row #####
#device_serial=`adb get-serialno`
device_model=`adb -s ${device_serial} shell getprop ro.product.model`
device_build_id=`adb -s ${device_serial} shell getprop ro.build.id`
device_os_build_version=`adb -s ${device_serial} shell getprop ro.build.version.release`

check_wifi_connection=$2
check_location_on=$3
check_app_update=$4
check_auto_rotate_off=$5
apps_update_only=$6
file_with_applist_for_update_chk=$7
clear_recents="N"
playstore_package_name="com.android.vending"
apk_updated=""