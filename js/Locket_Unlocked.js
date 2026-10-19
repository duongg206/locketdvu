// ============================================================
// Locket Remote Config Rewrite
// Endpoint: firebaseremoteconfig.googleapis.com
// Dùng cho: Loon / Quantumult X / Surge / Shadowrocket
// Tác giả: @yangdvu
// ============================================================

var obj = JSON.parse($response.body);
obj.Attention = "Locket Gold VIP by YangDvu!";
obj.entries = obj.entries || {};

    // ============================================================
    // 1. CẤU HÌNH GOLD, FEATURE GATES & PAYWALL
    // ============================================================
    Object.assign(obj.entries, {
        feature_gates: JSON.stringify({
            app_icon_picker: "enabled",
            camera_roll: "enabled",
            camera_theme: "enabled",
            locket_views: "enabled",
            long_captions: "enabled",
            longer_video: "enabled",
            unlimited_friends: "enabled",
            priority_support: "enabled",
            profile_badge: "enabled",
            remove_ads: "enabled",
            video: "enabled",
            custom_widget_frames: "enabled",
            streak_recovery: "enabled"
        }),
        upsell_features: JSON.stringify({
            app_icon_picker: true,
            camera_roll: true,
            camera_theme: true,
            locket_views: true,
            remove_ads: true,
            custom_widget_frames: true
        }),
        paywall_presentation_config: JSON.stringify({
            uid: "paywall_testflight",
            onboarding: false,
            after_sent_moment: false,
            on_foreground: false,
            interval: 2592000,
            profile_banner: true
        }),
        feature_discovery_popup_config: JSON.stringify({
            tag: "LOCKET GOLD",
            tag_gradient: true,
            tag_style: "gold_gradient",
            title: "Locket Gold - YangDvu 😎",
            feature_set: [
                {
                    title: "Chào mừng bạn đến với Locket Gold ✨",
                    body: "Cảm ơn bạn, mắt bạn thật tinh tườm",
                    imageURL: "https://raw.githubusercontent.com/duongg206/locketdvu/main/assets/img/welcome_gold.png"
                }
            ],
            primary_button_title: "Bắt đầu ngay",
            campaign: "locket_gold_welcome_yangdvu",
            start_at: "2020-01-01T00:00:00",
            end_at: "2099-12-31T23:59:59",
            use_local_time_zone: true
        }),
        android_subscribe_gold_button_enabled: "false",
        profile_badge_visible: "true",
        lunar_new_year_app_icon_enabled: "true",
        settings_instagram_url: "",
        settings_tiktok_url: ""
    });

    // ============================================================
    // 2. CHẶN QUẢNG CÁO & TẮT TRACKING (SENTRY)
    // ============================================================
    Object.assign(obj.entries, {
        history_ads_mode: "off",
        history_ads_prefetch_count: "0",
        history_ads_prefetch_immediate: "false",
        history_ads_prefetch_reroute: "false",
        history_ads_dynamic_insertion: "false",
        history_ads_refresh_prefetch_on_foreground: "false",
        history_ads_floor_price: "0",
        history_ads_floor_price_att: "0",
        history_ad_log_displayed_on_background: "false",
        history_ads_debug_menu: "false",
        sentry_sample_rate: "0",
        sentry_network_tracing: "false",
        sentry_performance_tracking: "false",
        sentry_trace_sample_rate: "0",
        sentry_profiles_sample_rate: "0"
    });

    // ============================================================
    // 3. CAMERA, VIDEO, FILTERS & UPLOAD QUALITY
    // ============================================================
    Object.assign(obj.entries, {
        camera: JSON.stringify({
            gold_max_duration: 45.0,
            goldMaxDuration: 45.0,
            max_duration: 45.0,
            maxDuration: 45.0,
            video_max_duration: 45.0,
            videoMaxDuration: 45.0,
            ultra_wide: true,
            ultraWide: true,
            volume_button: true,
            volumeButton: true,
            flash_button: true,
            telephoto: true,
            srgb: true,
            lanczos: true,
            quality_mbps: 1.8,
            qualityMbps: 1.8,
            video_quality_mbps: 1.8,
            videoQualityMbps: 1.8
        }),
        camera_roll: JSON.stringify({
            gold_max_duration: 45.0,
            goldMaxDuration: 45.0,
            video_max_duration: 45.0,
            videoMaxDuration: 45.0,
            max_duration: 45.0,
            maxDuration: 45.0,
            trim_max_duration: 45.0,
            trimMaxDuration: 45.0,
            camera_roll_max_duration: 45.0,
            quality_mbps: 1.8,
            qualityMbps: 1.8,
            flash_button: true
        }),
        live_photos: JSON.stringify({
            capture: true,
            viewing: true,
            catch_up: true,
            widget_looping_mode: "never"
        }),
        camera_filter_config: JSON.stringify({
            allows_custom_filters: true,
            show_filter_button: true,
            sheet_enabled: true,
            open_sheet_immediately: true,
            sheet_filters: [
                { title: { en: "Goofy" }, filter_ids: ["okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows"] },
                { title: { en: "Looks" }, filter_ids: ["bowling_ball", "blonde_bleached", "beard", "bob_cut", "buns", "tatted", "mohawk", "braces", "bye_brows"] },
                { title: { en: "Celebrate" }, filter_ids: ["slimed", "princess", "disco_lights", "cash_money", "happy_birthday"] },
                { title: { en: "Cute" }, filter_ids: ["cutesy", "sticker_face", "flower_crown", "love_bug"] },
                { title: { en: "Costumes" }, filter_ids: ["wedding", "cowboy_cowgirl", "giraffe", "clown"] },
                { title: { en: "Holidays" }, filter_ids: ["easter_bunney_cutout", "easter_chick_cutout", "bearded", "leprechaun", "lucky_face", "sweet_hearts", "elf_cutout", "santa_cutout", "frosty"] }
            ],
            picker_filters: [
                "okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows",
                "bowling_ball", "blonde_bleached", "beard", "bob_cut", "buns",
                "tatted", "mohawk", "braces", "slimed", "princess",
                "disco_lights", "cash_money", "happy_birthday", "cutesy", "sticker_face",
                "flower_crown", "love_bug", "wedding", "cowboy_cowgirl", "giraffe",
                "clown", "easter_bunney_cutout", "easter_chick_cutout", "bearded", "leprechaun",
                "lucky_face", "sweet_hearts", "elf_cutout", "santa_cutout", "frosty"
            ]
        }),
        camera_roll_preview_enabled: "true",
        camera_roll_video_enabled: "true",
        camera_roll_video_upload_enabled: "true",
        internal_camera_roll_video_upload_enabled: "true",
        longer_camera_roll_videos_enabled: "true",
        camera_roll_video_max_duration: "45.0",
        camera_roll_max_duration: "45.0",
        camera_roll_duration: "45.0",
        max_video_duration: "45.0",
        video_max_duration: "45.0",
        video_trim_max_duration: "45.0",
        trim_max_duration: "45.0",
        gold_max_duration: "45.0",
        goldMaxDuration: "45.0",
        video_quality_mbps: "1.8",
        quality_mbps: "1.8",
        video_sound_enabled: "true",
        microphone_enabled: "true",
        camera_microphone_enabled: "true",
        audio_session_deactivation_enabled: "true",
        zoom_enabled: "true",
        upload_main: "false",
        upload_main_image_quality: "0.6",
        upload_main_image_size: "1440",
        upload_thumbnail_image_quality: "0.8",
        upload_thumbnail_image_size: "1020"
    });

    // ============================================================
    // 4. BẠN BÈ, GIỚI HẠN & ĐỀ XUẤT KẾT BẠN
    // ============================================================
    Object.assign(obj.entries, {
        max_friends_count: "999999",
        friend_limit_mode: "0",
        soft_friend_limit_threshold_count: "999999",
        show_friend_limit_on_cam: "false",
        signup_max_friends_count: "999999",
        celebrity_inbox_limit: "999999",
        friend_limit_geo_override: JSON.stringify({ experiments: {}, area_code_overrides: {} }),
        friends_sheet_locket_count_config: JSON.stringify({
            items: [
                { threshold: 0, icon_name: "heart" },
                { threshold: 1, icon_name: "heart.fill" },
                { threshold: 10, emoji: "🤍" },
                { threshold: 100, emoji: "💛" },
                { threshold: 500, emoji: "❤️‍🔥" },
                { threshold: 1000, emoji: "🌟🫶🌟" },
                { threshold: 2000, emoji: "✨💟✨" },
                { threshold: 5000, emoji: "⚡️😵‍💫⚡" },
                { threshold: 10000, emoji: "✨⚡️😱⚡✨" }
            ]
        }),
        friend_locket_count_config: JSON.stringify({
            items: [
                { threshold: 0, icon_name: "heart" },
                { threshold: 1, icon_name: "heart.fill" },
                { threshold: 10, emoji: "🤍" },
                { threshold: 100, emoji: "💛" },
                { threshold: 500, emoji: "❤️‍🔥" },
                { threshold: 1000, emoji: "✨💗✨" },
                { threshold: 2000, emoji: "✨️⭐️✨" },
                { threshold: 5000, emoji: "✨💎✨" },
                { threshold: 10000, emoji: "✨🔐💛✨" }
            ]
        }),
        new_friends_monitoring_enabled: "true",
        improved_friend_suggestions: "true",
        show_friend_suggestions_by_default: "true",
        emoji_friend_suggestions: "true",
        prompt_contact_permissions_on_search: "true",
        populate_phone_numbers_from_suggest_friends: "true",
        hide_friends_enabled: "true",
        hide_invite_links: "false",
        hide_skip_contacts: "true",
        show_all_contacts: "true",
        show_invite_suggestions: "true",
        show_no_friends_bottom_sheet: "false",
        signup_allow_skip_add_friends: "true"
    });

    // ============================================================
    // 5. MOMENTS, STREAK, CHAT & TƯƠNG TÁC
    // ============================================================
    try {
        var streak = JSON.parse(obj.entries.streak_config || "{}");
        streak.minimum_recovery_count = 0;
        streak.minimum_display_count = 0;
        obj.entries.streak_config = JSON.stringify(streak);
    } catch (e) { }

    Object.assign(obj.entries, {
        moment_views_enabled: "true",
        moment_views_v2: "true",
        record_moment_views: "true",
        notify_moment_views: "true",
        get_moment_views_as_cloud_function: "true",
        moment_reactions_v2: "true",
        chat_reactions_enabled: "true",
        conversation_reactions: "true",
        typing_indicators_enabled: "true",
        unsend_message_enabled: "true",
        reply_prototype_enabled: "true",
        messages_integration: "true",
        conversations_enabled: "true",
        fetch_moments_in_conversation: "true",
        hide_chat_button: "false",
        groups_enabled: "true",
        send_to_self_only_mode: "always_enabled",
        time_travel_rewind_v2_enabled: "true",
        calendar_delete_moment_enabled: "true",
        calendar_rewind_enabled: "false",
        locket_yearbook_story_sharing_encouraged: "true",
        rollcall_enabled: "true",
        rollcall_comment_actions: "true",
        rollcall_profile_button: "true",
        rollcall_prompt_export_after_share: "true",
        rollcall_confirm_skip_tagging: "false",
        rollcall_tap_to_tag_enabled: "false"
    });

    // ============================================================
    // 6. WIDGET, THÔNG BÁO & GIAO DIỆN (JOURNAL / PROFILE)
    // ============================================================
    Object.assign(obj.entries, {
        widget_frame_event_max_images: "5",
        android_widget_frame_event_enabled: "true",
        widget_badge_enabled: "true",
        widget_badge_v2: "true",
        widget_stale_state_enabled: "false",
        widget_last_sent_indicator: "false",
        // widget_frame_event: Tạm tắt theo yêu cầu, sau thêm sau
        live_activity_onboarding: "true",
        live_activity_onboarding_variant: "friending",
        register_live_activity_push_to_start_token: "true",
        live_activity_remove_stale_start_token: "true",
        notification_preferences_live_activities: "true",
        notification_preferences: "true",
        notification_reply_body_visible: "true",
        prompt_notification_permissions_after_friending: "true",
        activity_bar_enabled: "true",
        journal_activity_bar_enabled: "true",
        journal_settings: JSON.stringify({
            debug_menu_enabled: false,
            focus_animation: false,
            compact_header: true,
            friends_button: false,
            reverse_scroll_direction: false,
            streak_visualization: true,
            streak_visualization_style: "gradient",
            streak_header_minimum_count: 0,
            streak_visualization_minimum_count: 2,
            overlay_indicators: { location: false, music: true, static_content: true, weather: true }
        }),
        qr_code_config: JSON.stringify({ profile_enabled: true, scanning_enabled: true }),
        custom_profile_pics: "true",
        profile_menu_v2_enabled: "true"
    });

    // ============================================================
    // 7. HỆ THỐNG, CACHE & STORAGE CDN
    // ============================================================
    Object.assign(obj.entries, {
        cdn_domain_replacements: JSON.stringify({ "firebasestorage.googleapis.com": "cdn.locketcamera.com" }),
        cdn_domain_replacements_video: "true",
        storage_bucket: "gs://locket-img",
        storage_bucket_video: "gs://locket-video",
        image_cache_max_age_sec: "157680000",
        image_cache_max_size: "400000000",
        history_cache_age_days: "1000",
        user_cache_max_age_sec: "691200",
        friends_cache_max_age_sec: "2592000",
        image_fetch_cache: "true",
        image_cache_use_shared: "true",
        use_doc_dir_for_image_cache: "true",
        efficient_history_cache_invalidation: "true",
        timestamp_based_history_fetches: "true",
        get_latest_moment_v2: "true",
        fetch_users_from_cloud_function: "true",
        refresh_interval: "60",
        firestore_refresh_v2: "true",
        firestore_refresh_v3: "true",
        keychain_access_retries: "true",
        blocked_users_cached_sync_enabled: "true",
        beta_features_enabled: "true",
        join_testflight_enabled: "true",
        safety_center: "true",
        help_center: "true",
        support_v2: "true",
        privacy_choices_setting: "true",
        request_att_permission: "true",
        invite_link_preview_variant: "4",
        share_history_config: JSON.stringify({ prompt_enabled: false, fetching_enabled: true }),
        share_history_prompt_enabled: "false",
        use_thumbnails_for_sharing: "true",
        use_thumbnails_in_timeline: "true",
        persist_onboarding_step: "true",
        onboarding_contact_permission_step: "true"
    });

    // ============================================================
    // 8. OVERLAY & CUSTOM CAPTIONS
    // ============================================================
    Object.assign(obj.entries, {
        overlay_navigator_enabled: "true",
        overlays_v2_config: JSON.stringify({ suggestions_enabled: true }),
        captions_enabled: "true",
        music_caption_enabled: "true",
        music_caption_song_preview_enabled: "true",
        link_caption_link_enabled: "true",
        overlay_dynamic_captions: JSON.stringify([
            "standard", "poll", "color_palette", "review", "music", "location",
            "weather", "time", "streak", "star_sign", "party_time", "locket_count",
            "good_morning", "goodnight", "ootd", "miss_you", "custom", "halloween_2026"
        ]),
        overlay_items: JSON.stringify([
            {
                section: "🎨 General",
                items: [
                    { overlay_id: "caption:standard", source: "local", caption: { type: "standard" } },
                    { overlay_id: "caption:review", source: "local", caption: { type: "review" } },
                    { overlay_id: "caption:music", source: "local", caption: { type: "music" } },
                    { overlay_id: "caption:location", source: "local", caption: { type: "location" } },
                    { overlay_id: "caption:weather", source: "local", caption: { type: "weather" } },
                    { overlay_id: "caption:time", source: "local", caption: { type: "time" } },
                    { overlay_id: "caption:streak", source: "local", caption: { type: "streak" } },
                    { overlay_id: "caption:star_sign", source: "local", caption: { type: "star_sign" } },
                    { overlay_id: "caption:poll", source: "local", caption: { type: "poll" } },
                    { overlay_id: "caption:color_palette", source: "local", caption: { type: "color_palette" } },
                    { overlay_id: "caption:locket_count", source: "local", caption: { type: "locket_count" } },
                    { overlay_id: "caption:goodnight", source: "local", caption: { type: "goodnight" } },
                    { overlay_id: "caption:good_morning", source: "local", caption: { type: "good_morning" } },
                    { overlay_id: "caption:miss_you", source: "local", caption: { type: "miss_you" } },
                    { overlay_id: "caption:party_time", source: "local", caption: { type: "party_time" } },
                    { overlay_id: "caption:ootd", source: "local", caption: { type: "ootd" } }
                ]
            },
            {
                section: "🎨 Decorative by YangDvu",
                items: [
                    { overlay_id: "caption:yangdvu", source: "remote", caption: { background: { colors: ["#FFD700", "#FFA500", "#FF8C00"] }, max_lines: 1, text: "👑 YangDvu", text_color: "#000000", type: "static_content" } }
                ]
            },
            {
                section: "🛡️ Locket Xác Nhận",
                items: [
                    { overlay_id: "caption:xac_nhan_chinh_chu", source: "remote", caption: { background: { colors: ["#00C0FF", "#009DD8", "#0072C6"] }, icon: { data: "🛡️", type: "emoji" }, max_lines: 1, text: "Locket xác nhận chính chủ", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:xac_nhan_cutii", source: "remote", caption: { background: { colors: ["#36D1DC", "#5B86E5", "#3A47D5"] }, icon: { data: "🎀", type: "emoji" }, max_lines: 1, text: "Locket xác nhận bạn cutii", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:xac_nhan_xinh_gai", source: "remote", caption: { background: { colors: ["#FF758C", "#FF4081", "#D81B60"] }, icon: { data: "👸", type: "emoji" }, max_lines: 1, text: "Locket xác nhận bạn xjnh gái", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:xac_nhan_dep_trai", source: "remote", caption: { background: { colors: ["#00A6FF", "#0075E8", "#0047BA"] }, icon: { data: "💎", type: "emoji" }, max_lines: 1, text: "Locket xác nhận bạn đẹp trai", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:xac_nhan_dang_iu", source: "remote", caption: { background: { colors: ["#FF5E7E", "#FF2E63", "#C70039"] }, icon: { data: "💖", type: "emoji" }, max_lines: 1, text: "Locket xác nhận bạn dangiu", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:xac_minh_gai_dep", source: "remote", caption: { background: { colors: ["#FF8DA1", "#FF6584", "#D81B60"] }, icon: { data: "🌸", type: "emoji" }, max_lines: 1, text: "Đã xác minh bạn là gái đẹp", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:xac_minh_trai_dep", source: "remote", caption: { background: { colors: ["#42A5F5", "#1E88E5", "#0D47A1"] }, icon: { data: "💠", type: "emoji" }, max_lines: 1, text: "Đã xác minh bạn là trai đẹp", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:xac_nhan_10_diem", source: "remote", caption: { background: { colors: ["#34D399", "#10B981", "#047857"] }, icon: { data: "💯", type: "emoji" }, max_lines: 1, text: "Locket xác nhận bạn 10 điểm", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:xac_nhan_vip", source: "remote", caption: { background: { colors: ["#FFE259", "#FFA751", "#FF6B00"] }, icon: { data: "👑", type: "emoji" }, max_lines: 1, text: "Locket xác nhận bạn VIP", text_color: "#000000", type: "static_content" } }
                ]
            },
            {
                section: "💐 20/10 Của Em Bé",
                items: [
                    { overlay_id: "caption:2010_1", source: "remote", caption: { background: { colors: ["#FF758C", "#FF7EB3", "#FFA07A"] }, icon: { data: "🌸", type: "emoji" }, max_lines: 1, text: "20/10 của bé", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:2010_2", source: "remote", caption: { background: { colors: ["#FF0844", "#FF4E50", "#F9D423"] }, icon: { data: "💐", type: "emoji" }, max_lines: 1, text: "Hoa 20/10 ảnh tặng", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:2010_3", source: "remote", caption: { background: { colors: ["#FF5E7E", "#FF99AC", "#FFEAA7"] }, icon: { data: "👑", type: "emoji" }, max_lines: 1, text: "Hôm nay em là công chúa", text_color: "#7D1B44", type: "static_content" } },
                    { overlay_id: "caption:2010_4", source: "remote", caption: { background: { colors: ["#F857A6", "#FF5858", "#FFA07A"] }, icon: { data: "🌷", type: "emoji" }, max_lines: 1, text: "20/10 ngoan xinh yêu", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:2010_5", source: "remote", caption: { background: { colors: ["#FA709A", "#FEE140", "#FFB199"] }, icon: { data: "🎁", type: "emoji" }, max_lines: 1, text: "20/10 có quà của ai kia nè", text_color: "#6B1736", type: "static_content" } },
                    { overlay_id: "caption:2010_6", source: "remote", caption: { background: { colors: ["#E52D27", "#FF4E50", "#FF8E53"] }, icon: { data: "💖", type: "emoji" }, max_lines: 1, text: "Cảm ơn chòn iu 20/10", text_color: "#FFFFFF", type: "static_content" } }
                ]
            },
            {
                section: "💖 Em Bé Cuti Của Anh",
                items: [
                    { overlay_id: "caption:bg_1", source: "remote", caption: { background: { colors: ["#654EA3", "#EAAFC8", "#FFDDE1"] }, icon: { data: "🧸", type: "emoji" }, max_lines: 1, text: "Em bé cuti xinh gái s1", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:bg_2", source: "remote", caption: { background: { colors: ["#FF9A9E", "#FAD0C4", "#FED6E3"] }, icon: { data: "👸", type: "emoji" }, max_lines: 1, text: "Công chúa nhỏ nhớ anh rồi", text_color: "#7D1B44", type: "static_content" } },
                    { overlay_id: "caption:bg_3", source: "remote", caption: { background: { colors: ["#FA709A", "#FEE140", "#FFB199"] }, icon: { data: "🫶", type: "emoji" }, max_lines: 1, text: "Chỉ làm nũng với mỗi anh", text_color: "#6B1736", type: "static_content" } },
                    { overlay_id: "caption:bg_4", source: "remote", caption: { background: { colors: ["#FF758C", "#FF7EB3", "#FED6E3"] }, icon: { data: "🎀", type: "emoji" }, max_lines: 1, text: "Ngoan xinh iu", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:bg_5", source: "remote", caption: { background: { colors: ["#A18CD1", "#FBC2EB", "#FFE5EC"] }, icon: { data: "🥺", type: "emoji" }, max_lines: 1, text: "Hự hự", text_color: "#4A154B", type: "static_content" } },
                    { overlay_id: "caption:bg_6", source: "remote", caption: { background: { colors: ["#FF416C", "#FF4B2B", "#FF8E53"] }, icon: { data: "😗", type: "emoji" }, max_lines: 1, text: "10 điểm ko nhưng", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:bg_7", source: "remote", caption: { background: { colors: ["#FEE140", "#FA709A", "#FF6E7F"] }, icon: { data: "🤤", type: "emoji" }, max_lines: 1, text: "đóii...", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:bg_8", source: "remote", caption: { background: { colors: ["#F093FB", "#F5576C", "#FFA07A"] }, icon: { data: "👀", type: "emoji" }, max_lines: 1, text: "Đố bít.", text_color: "#FFFFFF", type: "static_content" } }
                ]
            }
        ])
    });

$done({ body: JSON.stringify(obj) });

